with open('src/components/Packages.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

braces = 0
for i, char in enumerate(code):
    if char == '{':
        braces += 1
    elif char == '}':
        braces -= 1
        if braces < 0:
            line_no = code.count(chr(10), 0, i) + 1
            print(f"Brace depth went negative at line {line_no} character {i}")
            # print the surrounding text
            start = max(0, i-50)
            end = min(len(code), i+50)
            print(repr(code[start:end]))
            break
