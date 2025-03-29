document.getElementById("scanBtn").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scanPageText,
    });
  
    // Display result
    document.getElementById("result").innerHTML = `<strong>${result.verdict}</strong>`;
  
    if (Object.keys(result.words).length > 0) {
      let wordList = "<ul>";
      for (let [word, count] of Object.entries(result.words)) {
        wordList += `<li>${word}: ${count}</li>`;
      }
      wordList += "</ul>";
      document.getElementById("result").innerHTML += wordList;
    }
  });
  
  function scanPageText() {
    const targetWords = [
      "Firstly", "Moreover", "Furthermore", "However", "Therefore", "Additionally", "Specifically",
      "Generally", "Consequently", "Importantly", "Similarly", "Nonetheless", "As a result", "Indeed",
      "Thus", "Alternatively", "Notably", "As well as", "Despite", "Essentially", "While", "Unless",
      "Also", "Even though", "Because", "In contrast", "Although", "In order to", "Due to", "Even if",
      "Given that", "Arguably", "To consider", "Ensure", "Vibrant", "Bustling", "Essential", "Vital",
      "Out of the box", "Underscores", "Landscape", "Tapestry", "Soul", "Crucible", "It depends on",
      "That being said", "You may want to", "It's important to note", "This is not an exhaustive list",
      "You could consider", "In summary", "On the other hand", "As previously mentioned",
      "It's worth noting that", "In conclusion", "To summarize", "Ultimately", "To put it simply",
      "Pesky", "Promptly", "Dive into", "In today's digital era", "Reverberate", "Enhance", "Emphasise",
      "Enable", "Delve", "Hustle and bustle", "Revolutionize", "Folks", "Foster", "Sure", "Labyrinthine",
      "Moist", "Remnant", "As a professional", "Subsequently", "Nestled", "Game changer", "Symphony",
      "Labyrinth", "Gossamer", "Enigma", "Whispering", "Sights unseen", "Sounds unheard",
      "A testament to", "Dance", "Metamorphosis", "Indelible", "It’s important to note", "Delve into",
      "Tapestry", "Bustling", "In summary", "In conclusion", "Remember that", "Take a dive into",
      "Navigating", "Testament", "In the world of", "Realm", "Embark", "Landscape"
    ];
  
    const text = document.body.innerText;
    const found = {};
    let hitCount = 0;
  
    for (let phrase of targetWords) {
      const regex = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, "gi");
      const matches = text.match(regex);
      if (matches) {
        found[phrase] = matches.length;
        hitCount++;
      }
    }
  
    const duplicates = Object.values(found).filter(count => count > 2).length;
    const verdict = (duplicates > 9 || hitCount >= 5) ? "This looks less human" : "Good to go";
  
    return { verdict, words: found };
  }