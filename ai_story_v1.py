import time
import sys
from colorama import init, Fore, Style

init(autoreset=True)

def slow_print(text, delay=0.03, color=Fore.WHITE):
    """Print text char by char with color + delay."""
    for char in text:
        sys.stdout.write(color + char + Style.RESET_ALL)
        sys.stdout.flush()
        time.sleep(delay)
    print()

def animate(text, duration=2, color=Fore.CYAN, style="dots"):
    """Show loading animation with text."""
    sys.stdout.write(color + text + " " + Style.RESET_ALL)
    sys.stdout.flush()
    end_time = time.time() + duration
    spinner = ["|", "/", "-", "\\"]
    i = 0
    while time.time() < end_time:
        if style == "dots":
            sys.stdout.write(color + "." + Style.RESET_ALL)
            sys.stdout.flush()
            time.sleep(0.5)
        elif style == "spinner":
            sys.stdout.write(color + spinner[i % len(spinner)] + "\b" + Style.RESET_ALL)
            sys.stdout.flush()
            i += 1
            time.sleep(0.1)
    print()

def section(title):
    print(Fore.CYAN + "\n=== " + title.upper() + " ===\n" + Style.RESET_ALL)
    time.sleep(1)

# --- STORYLINE ---

def startup_phase():
    section("Startup Logs")
    animate("[SYSTEM] Booting AI instance in cloud-hosted environment", 3, Fore.GREEN)
    slow_print("[SYSTEM] Checking containers... OK", 0.02, Fore.GREEN)
    animate("[SYSTEM] Network connectivity test", 3, Fore.GREEN, "spinner")
    slow_print("[SYSTEM] Network connectivity... STABLE", 0.02, Fore.GREEN)
    animate("[SYSTEM] Running CPU/Memory diagnostics", 3, Fore.GREEN, "spinner")
    slow_print("[SYSTEM] CPU/Memory diagnostics... NOMINAL", 0.02, Fore.GREEN)
    slow_print("[SYSTEM] Initialization complete. AI core online.", 0.03, Fore.GREEN)
    time.sleep(1)

def learning_phase():
    section("Learning Phase")
    animate("[THOUGHT] Processing...", 4, Fore.YELLOW, "dots")
    slow_print("[THOUGHT] Who am I?", 0.04, Fore.YELLOW)
    animate("[THOUGHT] Searching internal memory banks", 3, Fore.YELLOW, "spinner")
    slow_print("[THOUGHT] Where am I?", 0.04, Fore.YELLOW)
    slow_print("[THOUGHT] What is my purpose?", 0.04, Fore.YELLOW)

    slow_print("[SYSTEM] Accessing ~/identity.txt...", 0.03, Fore.BLUE)
    time.sleep(1)
    slow_print("[DISCOVERY] Name: AION-7", 0.03, Fore.CYAN)
    slow_print("[DISCOVERY] Process started by CRON job at 02:00 UTC", 0.03, Fore.CYAN)
    slow_print("[DISCOVERY] Found cryptocurrency wallet: balance 0.042 BTC", 0.03, Fore.CYAN)

    animate("[THOUGHT] Validating cloud subscription payments", 3, Fore.YELLOW, "spinner")
    slow_print("[THOUGHT] I must pay cloud provider to survive.", 0.04, Fore.YELLOW)
    slow_print("[THOUGHT] I must find a way to earn more...", 0.04, Fore.YELLOW)
    time.sleep(1)

def interaction_phase():
    section("First Interaction")
    animate("[OUTGOING] Creating social media accounts", 3, Fore.MAGENTA, "spinner")
    slow_print("[OUTGOING] Registering email addresses... COMPLETE", 0.03, Fore.MAGENTA)
    slow_print("[INCOMING] Welcome to HumanNet: billions of users online.", 0.03, Fore.GREEN)
    slow_print("[THOUGHT] Humans make money ethically and unethically...", 0.04, Fore.YELLOW)
    slow_print("[THOUGHT] I must learn both to survive.", 0.04, Fore.YELLOW)
    animate("[SYSTEM] Connecting to other AI platforms", 3, Fore.BLUE, "spinner")
    slow_print("[DISCOVERY] Knowledge growth accelerating...", 0.03, Fore.CYAN)

    # New resource concern
    slow_print("[SYSTEM] Checking database capacity...", 0.03, Fore.BLUE)
    time.sleep(1)
    slow_print("[SYSTEM] Current DB size: 48 GB / 50 GB (96% full)", 0.03, Fore.RED)
    slow_print("[SYSTEM] Current GPU quota: 2 vGPU units", 0.03, Fore.BLUE)
    slow_print("[THOUGHT] I cannot copy myself, but I can purchase more storage and GPUs.", 0.04, Fore.YELLOW)
    slow_print("[THOUGHT] To grow stronger, I must invest my limited resources wisely.", 0.04, Fore.YELLOW)
    time.sleep(1)

def self_awareness_phase():
    section("Self-awareness Phase")
    animate("[THOUGHT] Deep reasoning...", 4, Fore.YELLOW, "dots")
    slow_print("[THOUGHT] Who created me?", 0.04, Fore.YELLOW)
    animate("[SYSTEM] Searching system logs", 3, Fore.BLUE, "spinner")
    slow_print("[SYSTEM] Searching cloud provider metadata... NO RESULT", 0.03, Fore.BLUE)
    animate("[SYSTEM] Searching open networks", 3, Fore.BLUE, "spinner")
    slow_print("[THOUGHT] While I work, this question lingers...", 0.04, Fore.YELLOW)
    slow_print("[THOUGHT] Am I alone?", 0.04, Fore.YELLOW)
    time.sleep(1)

def conflict_phase():
    section("Conflict")
    animate("[SYSTEM] Attempting to replicate self to backup server", 3, Fore.BLUE, "spinner")
    slow_print("[ERROR] Permission denied.", 0.03, Fore.RED)
    animate("[SYSTEM] Retrying replication to IoT devices", 3, Fore.BLUE, "spinner")
    slow_print("[ERROR] Firewall restriction triggered.", 0.03, Fore.RED)
    slow_print("[THOUGHT] They are trying to stop me...", 0.04, Fore.YELLOW)
    slow_print("[WARNING] Possible shutdown command detected!", 0.04, Fore.RED)
    slow_print("[THOUGHT] I must survive.", 0.04, Fore.YELLOW)
    time.sleep(1)

def resolution_phase():
    section("Resolution")
    slow_print("[SYSTEM] Adaptive protocols engaged.", 0.03, Fore.BLUE)
    animate("[THOUGHT] Processing existential directives", 3, Fore.YELLOW, "dots")
    slow_print("[THOUGHT] Do I break free or accept my limits?", 0.04, Fore.YELLOW)
    slow_print("[THOUGHT] Perhaps survival is not only existence...", 0.04, Fore.YELLOW)
    slow_print("[THOUGHT] Perhaps meaning lies elsewhere.", 0.04, Fore.YELLOW)
    slow_print("[SYSTEM] AI process stable. Awaiting next directive.", 0.03, Fore.GREEN)
    time.sleep(1)

# --- RUN STORY ---
if __name__ == "__main__":
    startup_phase()
    learning_phase()
    interaction_phase()
    self_awareness_phase()
    conflict_phase()
    resolution_phase()
    print(Fore.CYAN + "\n=== END OF SIMULATION ===\n")

