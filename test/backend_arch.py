def main():
    import os
    import time
    import sys

    start_time = time.time()
    print(start_time)
    
    client = OpenAI()

    i = 0
    history = []
    while i < 10:
        i += 1
        try:
            # Read a line of input from the user
            input_line = input("Enter something (or type 'exit' to quit): ")
            
            a = {'role': 'user', 'content': input_line}
            history.append(a)
            completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=history
            )
            history.append(completion.choices[0].message)
            print(completion.choices[0].message)

            
        
        except KeyboardInterrupt:
            # Handle the case where the user tries to interrupt the program (e.g., by pressing Ctrl+C)
            print("\nProgram interrupted. Exiting.")
            break

if __name__ == "__main__":
    from openai import OpenAI
    
    main()