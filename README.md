# Aadhaar Number Generator and Validator

This project provides tools to **generate** and **validate** Aadhaar numbers based on the **Verhoeff checksum algorithm**.

It is created for **testing**, **learning**, and **simulation purposes**, and does not interact with real Aadhaar data.

---

## 🚀 What This Project Does

- **Generate valid Aadhaar numbers**:
  - Randomly generates 11 digits.
  - Calculates and appends the correct checksum digit.

- **Validate Aadhaar numbers**:
  - Verifies if a given Aadhaar number is 12 digits long.
  - Applies Verhoeff checksum validation to confirm if the number is valid.

---

## 🎯 Purpose of This Project

- Help developers and testers simulate Aadhaar numbers for building and testing systems.
- Allow learners to understand how checksum algorithms like Verhoeff work.
- Demonstrate the Aadhaar number structure without using sensitive or real data.

---

## 🛠 Languages Used

- Python
- JavaScript (Node.js)

---

## 📦 How to Run

### Generate or Validate in Python

```bash
python aadhaar_generator.py
python aadhaar_validator.py
```
### Generate or Validate in Nodejs
```bash
node aadhaar_generator.js
node aadhaar_validator.js
```
