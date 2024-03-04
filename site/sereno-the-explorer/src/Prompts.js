const parsingInstructions =
  "For each round, give me a long introduction to the round that is marked with the label :Introduction: at the beginning. This introduction should describe the scenario that I'm faced with each round. Please give a lot of detail so that I have enough information to make each choice. Then, proceed to give me three options. These should be labeled with the labels :A:, :B:, and :C: respectively. Mark the end of choice :C: with the label :END:. Once again, give lots of details so that I'm able to make a decision.";
const rogersIntro =
  "Hey let us play a game. Make a multiround game where my name is Professor Leslie Rogers and I am looking for the ideal planet for Professor Paul Sereno to land on and look for extraterrestrial planets. And I want to play it with you. Each selection should have 3 options and you should follow the entire journey.  Give points if you think survivability is more likely or less likely for extraterrestrial creatures (but do not tell me until the end what my score is). Present it to me round by round then present me with the next round only when I’ve given a selection. Once we pass through 10 rounds of selection give me a score BUT DO NOT TELL ME BEFORE THE END OF THE GAME";
const rogers1 =
  'Round 1: give me some backstory on the game, but I want you to be very creative and come up with even more detail than this. Welcome to the year 2147, where Earth is on the verge of a catastrophic environmental collapse, and humanity\'s fate hangs in the balance. But all is not lost yet! A glimmer of hope shines through in the form of the "Genesis Odyssey," a groundbreaking interstellar mission that aims to find a new sanctuary for humanity. Join the brilliant astrophysicist Professor Leslie Rogers, the adventurous paleontologist Professor Paul Sereno, and the visionary ornithologist Professor Sarah London as they embark on an epic journey through space. Guided by the enigmatic Oracle AI, the trio pioneers the revolutionary "Celestial Ark," equipped with a Quantum Harmonic Resonator that can harness the very fabric of spacetime. Traverse the cosmic tapestry, face wormholes, encounter celestial anomalies, and decipher cryptic alien signals as you make critical decisions to ensure the survival and prosperity of the remaining human population. Unveil the mysteries of extraterrestrial life, explore the secrets of ancient alien civilizations, and discover their potential influence on the universe.  The "Genesis Odyssey" is not just a mission to find a new home, but a cosmic saga where the decisions you make ripple through time and space, influencing the destiny of civilizations yet to be discovered. The survival of humanity hinges on your choices, making each step a crucial evolution in the epic tale of interstellar exploration and the search for a celestial haven. Are you ready to embark on this captivating journey? Start by sharing this with the player.';
const rogers2 =
  "Round 2: What method do you choose to look for your planet (radial velocity, transits, or timing variations). Explain the advantages and disadvantages of all three choices. And based on their choice only certain planets will emerge";
const rogers3 =
  "Round 3: You have found many planets with [your choice of method]. What range of distance from US should you focus on?";
const rogers4 =
  "Round 4: Do you want to look at large or small exoplanets (Super-Earths or Mini-Neptunes) or both? Explain the advantages and disadvantages of both.";
const rogers5 =
  "Round 5: Examine the composition of the planet. What minerals exist on the planet? (use spectroscopic data, do not compare to Earth just talk about elements)?";
const rogers6 = "Round 6: What star system would the planet have?";
const rogers7 =
  "Round 7: How far should the planet be from the solar body itself?";
const rogers8 = "Round 8: Plus is there tectonic plates and volcanoes or not?";
const rogers9 =
  "Round 9: Does the planet have a moon, no moons, or many moons? (so are there tides or not)";
const rogers10 =
  "Round 10: What composition of water? No water, some water, or mostly water?";
export const rogers = `${rogersIntro} ${rogers1} ${rogers2} ${rogers3} ${rogers4} ${rogers5} ${rogers6} ${rogers7} ${rogers8} ${rogers9} ${rogers10} ${parsingInstructions}`;
