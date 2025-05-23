import time
import random
import difflib

sentences = [
    "Hi! What do you like.",
    "Hello World.",
    "Python is my life.",
]

def calculate_wpm(start_time, end_time, text):
    words = len(text.split())
    time_minutes = (end_time - start_time) / 60
    return round(words / time_minutes)

def calculate_accuracy(reference, typed):
    matcher = difflib.SequenceMatcher(None, reference, typed)
    return round(matcher.ratio() * 100, 2)

def main():
    print("=== Ải 1 ===")
    input("Nhấn Enter để bắt đầu...")
    sentence = random.choice(sentences)
    print("\nGõ câu sau:\n")
    print(sentence)
    print("\n--- Gõ ở đây nè mấy ní ---")

    start = time.time()
    typed_text = input("\n> ")
    end = time.time()

    wpm = calculate_wpm(start, end, typed_text)
    accuracy = calculate_accuracy(sentence, typed_text)

    print("\n--- Kết quả ---")
    print(f"Tốc độ gõ: {wpm} từ/phút")
    print(f"Độ chính xác: {accuracy}%")

if __name__ == "__main__":
    main()
