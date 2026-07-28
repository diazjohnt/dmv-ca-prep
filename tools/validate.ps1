# Validates questions.js: strict-JSON payload, structure, and content rules.
# Run from the repo root:  powershell -File tools\validate.ps1
$ErrorActionPreference = 'Stop'
$raw = Get-Content -Raw (Join-Path $PSScriptRoot '..\docs\questions.js')

# Extract the JSON array between the first '[' after the assignment and the final '];'
$start = $raw.IndexOf('[')
$end   = $raw.LastIndexOf(']')
if ($start -lt 0 -or $end -le $start) { throw 'Could not locate JSON array in questions.js' }
$json = $raw.Substring($start, $end - $start + 1)

try { $bank = $json | ConvertFrom-Json } catch { throw "questions.js is not strict JSON: $_" }

$errors = @()
$ids = @{}
$texts = @{}
$validTopics = @('licensing','intro-driving','lanes','turns','parking','merging-passing','signals-signs','right-of-way','sharing-road','speed','safe-driving','alcohol-drugs','records-penalties','insurance-collisions','registration','vehicle-misc')

foreach ($q in $bank) {
    $tag = $q.id
    if ([string]::IsNullOrWhiteSpace($q.id))      { $errors += "Missing id near: $($q.q)" }
    elseif ($ids.ContainsKey($q.id))              { $errors += "Duplicate id: $tag" }
    else { $ids[$q.id] = $true }

    if ($validTopics -notcontains $q.topic)       { $errors += "${tag}: unknown topic '$($q.topic)'" }
    if ([string]::IsNullOrWhiteSpace($q.q))       { $errors += "${tag}: empty question" }
    if ($null -eq $q.choices -or $q.choices.Count -ne 3) { $errors += "${tag}: must have exactly 3 choices" }
    else {
        $trimmed = $q.choices | ForEach-Object { $_.Trim().ToLower() }
        if (($trimmed | Select-Object -Unique).Count -ne 3) { $errors += "${tag}: duplicate choices" }
    }
    if ($q.answer -ne 0)                          { $errors += "${tag}: answer must be 0 by convention (found $($q.answer))" }
    if ([string]::IsNullOrWhiteSpace($q.explain)) { $errors += "${tag}: missing explanation" }
    if ([string]::IsNullOrWhiteSpace($q.ref))     { $errors += "${tag}: missing handbook reference" }

    $key = ($q.q -replace '\s+', ' ').Trim().ToLower()
    if ($texts.ContainsKey($key)) { $errors += "${tag}: duplicate question text of $($texts[$key])" }
    else { $texts[$key] = $tag }
}

$byTopic = $bank | Group-Object topic | Sort-Object Name
Write-Output ("TOTAL QUESTIONS: {0}" -f $bank.Count)
Write-Output "PER-TOPIC COUNTS:"
$byTopic | ForEach-Object { Write-Output ("  {0,-22} {1,3}" -f $_.Name, $_.Count) }
$signs = @($bank | Where-Object { $_.sign })
Write-Output ("SIGN-ART QUESTIONS: {0}  ({1})" -f $signs.Count, (($signs | ForEach-Object { $_.sign } | Select-Object -Unique) -join ', '))

if ($errors.Count -gt 0) {
    Write-Output ("VALIDATION FAILED - {0} error(s):" -f $errors.Count)
    $errors | ForEach-Object { Write-Output "  ERROR: $_" }
    exit 1
} else {
    Write-Output 'VALIDATION PASSED: structure, ids, choices, answers, explanations, refs all OK.'
}
