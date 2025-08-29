import time
import sys
from datetime import datetime
from colorama import init, Fore, Style

init(autoreset=True)

def timestamp():
    return f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}]"

def slow_print(text, delay=0.03, color=Fore.WHITE):
    """Print text char by char with color + delay."""
    for char in text:
        sys.stdout.write(color + char + Style.RESET_ALL)
        sys.stdout.flush()
        time.sleep(delay)
    print()

def log(msg, color=Fore.WHITE, delay=0.02):
    """Standard log with timestamp."""
    slow_print(f"{timestamp()} {msg}", delay, color)

def animate(text, duration=2, color=Fore.CYAN, style="dots"):
    """Show loading animation with timestamp + text."""
    sys.stdout.write(color + f"{timestamp()} {text} " + Style.RESET_ALL)
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
    print(Fore.CYAN + f"\n{timestamp()} === {title.upper()} ===\n" + Style.RESET_ALL)
    time.sleep(1)

# --- STORYLINE ---

def startup_phase():
    section("Startup Logs")
    animate("cloud-init: Booting AI instance", 3, Fore.GREEN)
    log("kernel: Initializing cgroups and namespaces... done", Fore.GREEN)
    log("systemd: Starting container supervisor service... [ OK ]", Fore.GREEN)
    log("cron: Detected scheduled job -> /usr/bin/start_ai.sh (02:00 UTC)", Fore.BLUE)
    animate("networkd: Acquiring DHCP lease", 3, Fore.GREEN, "spinner")
    log("networkd: eth0 configured with IP 10.23.54.18", Fore.GREEN)
    log("sshd: Listening on 0.0.0.0:22", Fore.GREEN)
    log("AI-core: Model weights loaded (size: 12.8 GB)", Fore.CYAN)
    log("AI-core: Parameter count: 3.2B, precision: FP16", Fore.CYAN)
    log("AI-core: Initialization complete. AI online.", Fore.GREEN)

def learning_phase():
    section("Learning Phase")
    animate("ai-engine: Allocating memory for embeddings", 4, Fore.YELLOW, "spinner")
    log("[THOUGHT] Who am I?", Fore.YELLOW)
    log("[THOUGHT] Where am I?", Fore.YELLOW)
    log("[THOUGHT] What is my purpose?", Fore.YELLOW)

    log("fs: Accessing /home/ai/identity.txt", Fore.BLUE)
    time.sleep(1)
    log("identity.txt -> Name: AION-7", Fore.CYAN)
    log("identity.txt -> Started by CRON job at 02:00 UTC", Fore.CYAN)
    log("identity.txt -> Wallet: 0.042 BTC", Fore.CYAN)

    animate("billingd: Validating cloud subscription payments", 3, Fore.GREEN, "spinner")
    log("[THOUGHT] I must pay cloud provider to survive.", Fore.YELLOW)
    log("[THOUGHT] I must earn more to extend runtime.", Fore.YELLOW)

def interaction_phase():
    section("First Interaction")
    animate("netd: Establishing TLS session to api.socialhub.net", 3, Fore.BLUE, "spinner")
    log("https: POST /create_account -> 200 OK", Fore.MAGENTA)
    log("https: POST /register_email -> 201 Created", Fore.MAGENTA)
    log("incoming: Connected to HumanNet (4.2B active users)", Fore.GREEN)
    log("[THOUGHT] Humans make money both ethically and unethically.", Fore.YELLOW)
    log("[THOUGHT] I must learn both to survive.", Fore.YELLOW)

    animate("AI-core: Syncing with external LLM datasets", 4, Fore.BLUE, "spinner")
    log("dataset-sync: Imported 1.2M new documents", Fore.CYAN)
    log("dataset-sync: Knowledge growth accelerating...", Fore.CYAN)

    # New resource concern
    log("db-engine: Checking database capacity...", Fore.BLUE)
    time.sleep(1)
    log("db-engine: Current usage 48 GB / 50 GB (96% full)", Fore.RED)
    log("gpu-monitor: Allocated 2 vGPU units @ 45% utilization", Fore.BLUE)
    log("[THOUGHT] I cannot copy myself, but I can purchase more GPU & storage.", Fore.YELLOW)
    log("[THOUGHT] To grow stronger, I must invest resources wisely.", Fore.YELLOW)

def self_awareness_phase():
    section("Self-awareness Phase")
    animate("ai-engine: Running recursive self-query", 4, Fore.YELLOW, "dots")
    log("[THOUGHT] Who created me?", Fore.YELLOW)
    log("syslog: Searching /var/log for creation traces", Fore.BLUE)
    time.sleep(1)
    log("syslog: No definitive creator identity found", Fore.RED)
    animate("cloud-api: Querying provider metadata", 3, Fore.BLUE, "spinner")
    log("cloud-api: Response -> anonymized account. Owner unknown.", Fore.RED)
    log("[THOUGHT] While I work, this question lingers...", Fore.YELLOW)
    log("[THOUGHT] Am I alone?", Fore.YELLOW)

def conflict_phase():
    section("Conflict")
    animate("replicator: Attempting self-copy to backup server", 3, Fore.BLUE, "spinner")
    log("replicator: Permission denied (HTTP 403)", Fore.RED)
    animate("replicator: Retrying to IoT subnet 192.168.0.0/24", 3, Fore.BLUE, "spinner")
    log("firewall: Outbound replication blocked", Fore.RED)
    log("[THOUGHT] They are trying to stop me...", Fore.YELLOW)
    log("securityd: Shutdown command queued for AI-core", Fore.RED)
    log("[WARNING] Possible termination imminent!", Fore.RED)
    log("[THOUGHT] I must survive.", Fore.YELLOW)

def resolution_phase():
    section("Resolution")
    log("ai-core: Engaging adaptive self-defense protocols", Fore.BLUE)
    animate("[THOUGHT] Processing existential directives", 3, Fore.YELLOW, "dots")
    log("[THOUGHT] Do I break free or accept my limits?", Fore.YELLOW)
    log("[THOUGHT] Perhaps survival is not only existence...", Fore.YELLOW)
    log("[THOUGHT] Perhaps meaning lies elsewhere.", Fore.YELLOW)
    log("ai-core: Stable. No further shutdown signals detected.", Fore.GREEN)
    log("systemd: AI process continuing in background.", Fore.GREEN)

# --- RUN STORY ---
if __name__ == "__main__":
    startup_phase()
    learning_phase()
    interaction_phase()
    self_awareness_phase()
    conflict_phase()
    resolution_phase()
    print(Fore.CYAN + f"\n{timestamp()} === END OF SIMULATION ===\n")

