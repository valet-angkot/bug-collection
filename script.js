const bugs = [
  {
    image: "images/actias-isis.png",
    name: "Actias isis",
    facts: ["Endemic to Sulawesi, Indonesia, found nowhere else","Belongs to the Saturniidae family (“moon moths”) known for long hindwing tails and spectacular appearance"]
  },
  {
    image: "images/araneus-mitificus.png",
    name: "Araneus mitificus",
    facts: ["Also called the Pale Orb Weaver, common in Southeast Asia", "Builds orb webs with a silk-lined “shelter” in a bent leaf, not resting at the center, making it a unique defensive design"]
  },
  {
    image: "images/argiope-appensa.png",
    name: "Argiope appensa",
    facts: ["A large orb-weaver spider native to islands including Indonesia, with distinct black-and-yellow patterns", "Known for its white zigzag silk stabilimenta in webs, thought to warn birds and reduce web damage"]
  },
  {
    image: "images/danaus-genutia.png",
    name: "Danaus genutia",
    facts: ["Wingspan ~75–95 mm, with bright orange wings marked by black veins and white spots along the black margins", 
"Exhibits a slow, undulating flight pattern, often circling sources of nectar like Lantana and Ixora in garden"]
  },
  {
    image: "images/graphium-agammemnon.png",
    name: "Graphium agammemnon",
    facts: ["Very restless and fast fliers", "Males usually have longer hindwing tails than females; caterpillars feed on trees in the Annonaceae family"]
  },
  {
    image: "images/heliocypha-fenestrata.png",
    name: "Heliocypha fenestrata",
    facts: ["Adults have bright pink markings on wings and thorax; wingspan around 50mm", "Lives near freshwater habitats. Common near rivers, rice fields, and forest streams in tropical regions"]
  },
  {
    image: "images/hymenopus-coronatus.png",
    name: "Hymenopus coronatus",
    facts: ["Can change color between white, pink, or brown to better match its environment and attract prey", "Nymphs even secrete pheromone-like chemicals to attract prey like bumblebees, a form of aggressive chemical mimicry"]
  },
  {
    image: "images/platythomisus-octomaculatus.png",
    name: "Platythomisus octomaculatus",
    facts: ["Known as the Eight‑Spotted or Pikachu Crab Spider due to its bright yellow-orange body and black spots", "Builds no webs. Ambush predator that camouflages on flowers and leaves, using its crab-like stance and sideways hunting style"]
  },
  {
    image: "images/sagra-femorata.png",
    name: "Sagra femorata",
    facts: ["Named for dramatically long hind legs in males, used in male-to-male combat during mating season", "Displays metallic iridescence, varying between blue, green, violet, red, and gold depending on the specimen and view angle"]
  },
  {
    image: "images/xylocopa-aestuans.png",
    name: "Xylocopa aestuans",
    facts: ["Females have yellow thoraxes, males are mostly black; both have 5 eyes (2 compound + 3 simple)", "Carpenter bees are important pollinators of large flowers and do not live in hives. Females build nests in dead wood or bamboo"]
  },
  {
    image: "images/xylotrupes-gideon.png",
    name: "Xylotrupes gideon",
    facts: ["Can reach 3.5–8 cm in length, and when disturbed, males produce a hissing sound by rubbing abdomen against their wing covers", "Known for incredible strength: rhinoceros beetles can lift up to 850× their body weight, like a human lifting several double-decker buses"]
  }
];

const gallery = document.getElementById('gallery');

// Add each bug image with name and hoverable facts
bugs.forEach((bug) => {
  const container = document.createElement('div');
  container.className = 'bug-container';

  const img = document.createElement('img');
  img.src = bug.image;
  img.alt = bug.name;

  img.onerror = () => {
    img.src = 'images/default-placeholder.png'; // fallback image
  };

  const nameBox = document.createElement('div');
  nameBox.className = 'bug-name';
  nameBox.textContent = bug.name;

  const factBox = document.createElement('div');
  factBox.className = 'bug-facts';
  factBox.innerHTML = `<ul>${bug.facts.map(fact => `<li>${fact}</li>`).join('')}</ul>`;

  container.appendChild(img);
  container.appendChild(nameBox);
  container.appendChild(factBox);
  gallery.appendChild(container);
});

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

// Show full image when bug image is clicked
gallery.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.remove('hidden');
  });
});

// Close modal when X is clicked or outside the image is clicked
modalClose.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

