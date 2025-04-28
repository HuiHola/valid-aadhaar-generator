import re

# Verhoeff algorithm tables
d_table = [
    [0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,0,6,7,8,9,5],
    [2,3,4,0,1,7,8,9,5,6],
    [3,4,0,1,2,8,9,5,6,7],
    [4,0,1,2,3,9,5,6,7,8],
    [5,9,8,7,6,0,4,3,2,1],
    [6,5,9,8,7,1,0,4,3,2],
    [7,6,5,9,8,2,1,0,4,3],
    [8,7,6,5,9,3,2,1,0,4],
    [9,8,7,6,5,4,3,2,1,0]
]

p_table = [
    [0,1,2,3,4,5,6,7,8,9],
    [1,5,7,6,2,8,3,0,9,4],
    [5,8,0,3,7,9,6,1,4,2],
    [8,9,1,6,0,4,3,5,2,7],
    [9,4,5,3,1,2,6,8,7,0],
    [4,2,8,6,5,7,3,9,0,1],
    [2,7,9,3,8,0,6,4,1,5],
    [7,0,4,6,9,1,3,2,5,8]
]

def validate_verhoeff(number: str) -> bool:
    c = 0
    num_reversed = map(int, reversed(number))
    for i, num in enumerate(num_reversed):
        c = d_table[c][p_table[i % 8][num]]
    return c == 0

def is_valid_aadhaar(number: str) -> bool:
    aadhaar_regex = re.compile(r"^\d{12}$")
    if not aadhaar_regex.match(number):
        return False
    return validate_verhoeff(number)

# === MAIN ===
if __name__ == "__main__":
    aadhaar_number = input("Enter Aadhaar number to validate: ").strip()
    if is_valid_aadhaar(aadhaar_number):
        print("✅ Aadhaar number is VALID.")
    else:
        print("❌ Aadhaar number is INVALID.")
