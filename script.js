let participantsCount = 0;

function uploadPhotos() {
  // Implement photo upload logic
}

function setParticipants() {
  participantsCount = prompt("Enter the number of participants:");
  document.getElementById("participantsInfo").innerText = `Participants: ${participantsCount}`;
}

function startSelection() {
  const container = document.getElementById("participantContainer");
  container.innerHTML = "";

  for (let i = 1; i <= participantsCount; i++) {
    const participant = document.createElement("div");
    participant.className = "participant";
    participant.innerText = `Participant ${i}`;
    container.appendChild(participant);
  }

  container.classList.remove("hidden");
  countdown();
}

function countdown() {
  const countdownElement = document.createElement("div");
  countdownElement.id = "countdown";
  document.body.appendChild(countdownElement);

  let count = 5;

  const countdownInterval = setInterval(() => {
    countdownElement.innerText = count;
    count--;

    if (count < 0) {
      clearInterval(countdownInterval);
      selectWinner();
    }
  }, 1000);
}

function selectWinner() {
  const participants = document.querySelectorAll(".participant");
  const winnerIndex = Math.floor(Math.random() * participants.length);
  const winner = participants[winnerIndex];

  winner.classList.add("winner");
  setTimeout(() => {
    alert(`Winner: ${winner.innerText}`);
    resetSelection();
  }, 2000);
}

function resetSelection() {
  document.getElementById("countdown").remove();
  document.getElementById("participantContainer").classList.add("hidden");
}
