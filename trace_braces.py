with open('src/components/Packages.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

braces = 0
for line_no, line in enumerate(lines, 1):
    old_braces = braces
    for char in line:
        if char == '{':
            braces += 1
        elif char == '}':
            braces -= 1
    # If brace count changed or if it is interesting, print it
    if braces != old_braces:
        # print line number and new depth and line snippet if depth is <= 1
        if braces <= 1 or line_no > 1090:
            print(f"Line {line_no:4d}: depth = {braces} | {line.strip()[:60]}")
