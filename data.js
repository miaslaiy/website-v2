/* ============================================================
   Practice test content.
   To add questions: drop another object into a module's
   "questions" array. Fields:
     - passage  : text shown in the left pane (RW) or above the
                  question (Math). Optional for Math.
     - figure   : optional { type:"table", ... } drawn above the question
     - question : the prompt shown in the right pane
     - type     : "mc" (default, multiple choice) or "spr"
                  (student-produced response / grid-in, Math only)
     - options  : array of 4 choices (mc only)
     - correct  : index 0-3 of the right choice (mc)
     - answers  : array of accepted strings (spr)
     - rationale: shown on the score report
   ============================================================ */

const TEST = {
  student: "Ram Penjarla",
  modules: [
    /* ---------------------------------------------------------
       SECTION 1  ·  READING AND WRITING  ·  MODULE 1
       --------------------------------------------------------- */
    {
      id: "rw1",
      label: "Section 1, Module 1: Reading and Writing",
      subject: "rw",
      minutes: 32,
      directions:
        "The questions in this section address a number of important reading and writing skills. Each question includes one or more passages, which may include a table or graph. Read each passage and question carefully, and then choose the best answer to the question based on the passage(s). All questions in this section are multiple choice with four answer choices. Each question has a single best answer.",
      questions: [
        {
          passage:
            "The following text is from Kenneth Grahame's 1908 novel The Wind in the Willows. The Rat is looking for the Mole, his friend, in the woods.\n\n[The Rat] had patiently hunted through the wood for an hour or more, when at last to his joy he heard a little answering cry. Guiding himself by the sound, he made his way through the gathering darkness to the foot of an old beech tree.",
          question:
            "As used in the text, what does the word “gathering” most nearly mean?",
          options: ["Meeting", "Believing", "Reacting", "Increasing"],
          correct: 3,
          rationale:
            "“Gathering darkness” refers to darkness that is steadily growing as night falls, so “increasing” is the closest meaning.",
        },
        {
          passage:
            "In recommending Bao Phi's poetry collection Sông I Sing, a librarian noted that pieces by the spoken-word artist don't lose their ______ quality when they appear in print: even on the page, the lines seem to demand to be read aloud.",
          question:
            "Which choice completes the text with the most logical and precise word or phrase?",
          options: ["scholarly", "musical", "unfinished", "private"],
          correct: 1,
          rationale:
            "\"Musical\" fits the idea that the poems still seem meant to be spoken aloud. The other choices do not connect to sound or performance.",
        },
        {
          passage:
            "Marine biologist Ashanti Johnson studies trace metals in seawater. Because these metals occur in such tiny concentrations, even a speck of dust from a researcher's skin or clothing can ______ a sample, producing readings that are far too high.",
          question:
            "Which choice completes the text with the most logical and precise word or phrase?",
          options: ["dilute", "contaminate", "preserve", "duplicate"],
          correct: 1,
          rationale:
            "A speck of dust that makes readings \"far too high\" has added something unwanted to the sample, which is what \"contaminate\" means.",
        },
        {
          passage:
            "The following text is adapted from Edith Wharton's 1905 novel The House of Mirth.\n\nLily had been bored all afternoon by the incessant chatter of the other guests. She had come to the country expecting quiet, and instead found herself surrounded by the same talk, the same faces, and the same small rivalries she had hoped to escape in town.",
          question:
            "Which choice best describes the function of the second sentence in the text as a whole?",
          options: [
            "It emphasizes Lily's disappointment by contrasting what she wanted with what she encountered.",
            "It suggests that Lily enjoys the company of the other guests despite her complaints.",
            "It introduces a conflict between Lily and a specific rival at the gathering.",
            "It explains why Lily decided to travel to the country in the first place.",
          ],
          correct: 0,
          rationale:
            "The passage sets Lily's expectation of \"quiet\" against the \"same talk, the same faces\" she actually found, underscoring her disappointment.",
        },
        {
          passage:
            "Archaeologists working at the site of Cerén, a village in El Salvador buried by volcanic ash around 600 CE, have uncovered gardens, tools, and even meals left mid-preparation. ______ the ash sealed the village so quickly, organic materials that normally decay were preserved in remarkable detail.",
          question:
            "Which choice completes the text with the most logical transition?",
          options: ["Nevertheless,", "Because", "For example,", "In contrast,"],
          correct: 1,
          rationale:
            "The second sentence gives the cause (rapid burial) of the preservation described, so a causal transition such as \"Because\" is needed.",
        },
        {
          passage:
            "Physicist Chien-Shiung Wu designed an experiment in 1956 to test whether the weak nuclear force treats left and right symmetrically. Her results showed that it does not. ______ the discovery overturned a principle that physicists had assumed to be a law of nature.",
          question:
            "Which choice completes the text with the most logical transition?",
          options: ["Similarly,", "Consequently,", "However,", "Meanwhile,"],
          correct: 1,
          rationale:
            "The final sentence states the result of Wu's findings, so a consequence transition such as \"Consequently\" is appropriate.",
        },
        {
          passage:
            "While researching a class project, Priya found four sources about urban beekeeping. She wants to cite the one that offers a firsthand account of maintaining hives on a rooftop over several seasons.",
          question:
            "Which quotation from a source would best support Priya's goal?",
          options: [
            "\"Urban beekeeping has grown in popularity in North American cities since the early 2000s.\"",
            "\"Over three summers on our building's roof, I learned that the hives nearest the ledge always swarmed first.\"",
            "\"Some researchers argue that city bees face fewer pesticides than their rural counterparts.\"",
            "\"A single hive can contain as many as 60,000 bees during peak season.\"",
          ],
          correct: 1,
          rationale:
            "Only choice B is a firsthand account describing the writer's own experience keeping hives on a roof across multiple seasons.",
        },
        {
          passage:
            "The painter Jacob Lawrence completed his sixty-panel Migration Series in 1941. He worked on all the panels at once, mixing each color in a large batch and applying it to every panel that required that color before moving on to the ______ this method gave the series its unusually consistent palette.",
          question:
            "Which choice completes the text so that it conforms to the conventions of Standard English?",
          options: ["next,", "next;", "next", "next:"],
          correct: 1,
          rationale:
            "Two independent clauses are joined here. A semicolon correctly separates them; a comma alone would create a comma splice.",
        },
        {
          passage:
            "Ecologist Robin Wall Kimmerer has written that gratitude toward the natural world ______ a practical function in some Indigenous traditions, reminding people to take only what they need and to give something back.",
          question:
            "Which choice completes the text so that it conforms to the conventions of Standard English?",
          options: ["serve", "serving", "serves", "to serve"],
          correct: 2,
          rationale:
            "The singular subject \"gratitude\" requires the singular present-tense verb \"serves.\"",
        },
        {
          passage:
            "Researchers studying the Hadza, a community in Tanzania, recorded how far individuals walked each day while foraging. ______ findings suggested that the daily activity levels of Hadza adults far exceed those of adults in industrialized societies.",
          question:
            "Which choice completes the text so that it conforms to the conventions of Standard English?",
          options: ["Their", "There", "They're", "Theirs"],
          correct: 0,
          rationale:
            "The possessive determiner \"Their\" is needed before the noun \"findings.\"",
        },
        {
          passage:
            "Text 1: Some historians of technology argue that the printing press spread rapidly through Europe mainly because it lowered the cost of books, making written knowledge available to people who could never have afforded hand-copied manuscripts.\n\nText 2: Historian Elizabeth Eisenstein emphasized a different effect: because printed copies were identical, scholars in distant cities could finally refer to the same text with the same page numbers, allowing them to compare notes and build on one another's work.",
          question:
            "Based on the texts, how would Eisenstein (Text 2) most likely respond to the argument presented in Text 1?",
          options: [
            "By agreeing that cost was the only meaningful factor in the spread of print",
            "By acknowledging the role of cost but arguing that standardization mattered as much or more",
            "By denying that printed books were ever cheaper than manuscripts",
            "By claiming that the printing press had little effect on scholarship",
          ],
          correct: 1,
          rationale:
            "Eisenstein does not dispute Text 1's point about cost; she adds that the identical, standardized copies enabled collaboration, presenting this as a comparably important effect.",
        },
        {
          passage:
            "A student is writing about the composer Florence Price. She wants to combine the following notes into a single sentence that emphasizes the recovery of Price's lost work.\n\n• Florence Price was an American composer active in the early 1900s.\n• Many of her manuscripts were thought to be lost.\n• In 2009, a large collection of her scores was found in an abandoned house.\n• The discovery led to new recordings and performances of her music.",
          question:
            "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          options: [
            "Florence Price was an American composer who was active in the early 1900s.",
            "New recordings and performances of Florence Price's music have been made in recent years.",
            "After many of Florence Price's manuscripts were long presumed lost, a 2009 discovery of her scores in an abandoned house prompted new recordings and performances.",
            "A large collection of scores was found in an abandoned house in 2009.",
          ],
          correct: 2,
          rationale:
            "Choice C foregrounds the loss and the recovery, linking the 2009 discovery to its effect, which matches the writer's goal.",
        },
        {
          passage:
            "The following text is adapted from Kate Chopin's 1899 novel The Awakening.\n\nThe voice of the sea is seductive, never ceasing, whispering, clamoring, murmuring, inviting the soul to wander for a spell in abysses of solitude. The touch of the sea is sensuous, enfolding the body in its soft, close embrace.",
          question: "Which choice best states the main idea of the text?",
          options: [
            "The sea is portrayed as dangerous and best avoided.",
            "The sea is described as an appealing presence that draws a person toward reflection and solitude.",
            "The narrator is recounting a specific afternoon spent swimming.",
            "The sea's sounds are unpleasant and difficult to ignore.",
          ],
          correct: 1,
          rationale:
            "The words \"seductive,\" \"inviting,\" and \"soft, close embrace\" present the sea as alluring and conducive to solitary reflection.",
        },
      ],
    },

    /* ---------------------------------------------------------
       SECTION 1  ·  READING AND WRITING  ·  MODULE 2
       --------------------------------------------------------- */
    {
      id: "rw2",
      label: "Section 1, Module 2: Reading and Writing",
      subject: "rw",
      minutes: 32,
      directions:
        "The questions in this section address a number of important reading and writing skills. Each question includes one or more passages, which may include a table or graph. Read each passage and question carefully, and then choose the best answer to the question based on the passage(s). All questions in this section are multiple choice with four answer choices. Each question has a single best answer.",
      questions: [
        {
          passage:
            "Paleontologist Mary Anning, working on the cliffs of Lyme Regis in the early 1800s, was largely ______ by the scientific societies of her day: they bought her fossils and used her findings but did not admit her as a member or credit her in print.",
          question:
            "Which choice completes the text with the most logical and precise word or phrase?",
          options: ["celebrated", "overlooked", "imitated", "funded"],
          correct: 1,
          rationale:
            "The colon explains that the societies used her work without crediting or admitting her, which is a form of being \"overlooked.\"",
        },
        {
          passage:
            "The novelist's later books are far more ______ than her early ones: where the first novels sprawled across hundreds of pages and dozens of characters, the recent works are short, spare, and focused on a single household.",
          question:
            "Which choice completes the text with the most logical and precise word or phrase?",
          options: ["ambitious", "restrained", "confusing", "popular"],
          correct: 1,
          rationale:
            "\"Short, spare, and focused\" describes writing that is held back or \"restrained\" compared with the sprawling early work.",
        },
        {
          passage:
            "A team of engineers tested a new bridge design using a scale model in a wind tunnel. ______ they subjected the model to gusts far stronger than any recorded at the planned construction site.",
          question:
            "Which choice completes the text with the most logical transition?",
          options: ["As a result,", "In particular,", "By contrast,", "Regardless,"],
          correct: 1,
          rationale:
            "The second sentence gives a specific detail about how the testing was done, so \"In particular\" fits.",
        },
        {
          passage:
            "Honeybees communicate the location of food through a \"waggle dance\" whose angle and duration encode direction and distance. Other bees crowd around the dancer in the dark hive, ______ they cannot see the dance at all. Researchers now think they read it largely through touch and air movement.",
          question:
            "Which choice completes the text so that it conforms to the conventions of Standard English?",
          options: ["so", "and", "but", "for"],
          correct: 2,
          rationale:
            "There is a contrast between crowding around the dance and being unable to see it, so the contrasting conjunction \"but\" is correct.",
        },
        {
          passage:
            "The astronomer Vera Rubin spent decades measuring the rotation of galaxies. Her data showed that the outer stars move just as fast as the inner ______ a pattern that makes sense only if a large amount of unseen mass is present.",
          question:
            "Which choice completes the text so that it conforms to the conventions of Standard English?",
          options: ["ones,", "ones;", "ones", "ones:"],
          correct: 0,
          rationale:
            "The phrase \"a pattern that makes sense only if...\" is a nonrestrictive appendage that renames the situation, correctly set off with a comma.",
        },
        {
          passage:
            "While studying tide pools along the Pacific coast, ______.",
          question:
            "Which choice completes the text so that it conforms to the conventions of Standard English?",
          options: [
            "sea stars were observed by the students preying on mussels",
            "the students observed sea stars preying on mussels",
            "there were sea stars preying on mussels that the students observed",
            "mussels were being preyed on by sea stars, the students observed",
          ],
          correct: 1,
          rationale:
            "The introductory phrase describes the students, so \"the students\" must immediately follow it to avoid a dangling modifier.",
        },
        {
          passage:
            "A student is writing about efforts to restore oyster reefs in New York Harbor. She wants to introduce a claim and then support it with a concrete figure.",
          question:
            "Which choice most effectively accomplishes this goal?",
          options: [
            "Oyster reefs filter water and provide habitat, and they are interesting to study.",
            "A single adult oyster can filter roughly 50 gallons of water a day, so rebuilding reefs could measurably improve the harbor's water quality.",
            "Many people are involved in the project, which has been running for years.",
            "Oysters were once abundant in the harbor before overharvesting and pollution.",
          ],
          correct: 1,
          rationale:
            "Choice B makes a claim (rebuilding reefs could improve water quality) and backs it with a specific number (50 gallons per oyster per day).",
        },
        {
          passage:
            "Text 1: Advocates of a four-day workweek point to trials in which companies kept output steady while giving employees an extra day off, arguing that shorter weeks reduce burnout without hurting productivity.\n\nText 2: Economist Dela Kusi-Appouh cautions that most published trials involved firms that volunteered and prepared for months. Whether the results would hold for a mandatory, economy-wide shift, she notes, remains untested.",
          question:
            "Based on the texts, Kusi-Appouh (Text 2) would most likely characterize the evidence cited in Text 1 as",
          options: [
            "conclusive proof that shorter weeks always raise productivity",
            "promising but drawn from conditions that may not generalize",
            "irrelevant to any discussion of the workweek",
            "deliberately falsified by the participating companies",
          ],
          correct: 1,
          rationale:
            "Kusi-Appouh does not reject the trials; she notes they involved self-selected, well-prepared firms, so the evidence is promising but of limited generalizability.",
        },
        {
          passage:
            "The following text is adapted from Zora Neale Hurston's 1937 novel Their Eyes Were Watching God.\n\nShip at a distance have every man's wish on board. For some they come in with the tide. For others they sail forever on the horizon, never out of sight, never landing, until the Watcher turns his eyes away in resignation, his dreams mocked to death by Time.",
          question:
            "As used in the text, the description of ships that \"sail forever on the horizon\" most nearly serves to",
          options: [
            "represent hopes that are always visible yet never fulfilled",
            "describe an actual voyage the narrator once took",
            "explain how sailors navigate using landmarks",
            "criticize people who spend time watching the sea",
          ],
          correct: 0,
          rationale:
            "The ships carry \"every man's wish\"; those that never land stand for dreams that remain in view but are never realized.",
        },
        {
          passage:
            "A researcher compiled data on four community gardens, recording the number of plots and the fraction of plots that were actively tended in a given month.",
          figure: {
            type: "table",
            caption: "Community Garden Use, June",
            headers: ["Garden", "Total plots", "Plots actively tended"],
            rows: [
              ["Elm Street", "40", "38"],
              ["Riverside", "60", "24"],
              ["Hilltop", "25", "20"],
              ["Canal", "50", "45"],
            ],
          },
          question:
            "Which choice most effectively uses data from the table to support the claim that participation varies widely across the gardens?",
          options: [
            "At Elm Street, 38 of 40 plots were tended, while at Riverside only 24 of 60 were.",
            "Riverside has the most total plots of the four gardens.",
            "Every garden had at least 20 plots actively tended.",
            "Canal and Elm Street together account for 90 total plots.",
          ],
          correct: 0,
          rationale:
            "Comparing Elm Street's 38/40 (95%) with Riverside's 24/60 (40%) directly illustrates a wide range in participation.",
        },
        {
          passage:
            "The choreographer wanted the new piece to feel unrehearsed. During performances, dancers were given only a starting position and a list of moods; ______ decided in the moment how long to hold each shape and when to move on.",
          question:
            "Which choice completes the text so that it conforms to the conventions of Standard English?",
          options: ["they", "them", "it", "one"],
          correct: 0,
          rationale:
            "The subject pronoun \"they\" refers to the dancers and functions as the subject of \"decided.\"",
        },
        {
          passage:
            "A student wants to conclude an essay about the naturalist Alexander von Humboldt by emphasizing his lasting influence.",
          question:
            "Which choice most effectively achieves this goal?",
          options: [
            "Humboldt was born in Berlin in 1769 and traveled widely in South America.",
            "Today, more places on Earth are named after Humboldt than after any other person, a sign of how deeply his idea of nature as an interconnected web still shapes science.",
            "Humboldt wrote many books, some of which were quite long.",
            "Humboldt corresponded with a large number of other scientists.",
          ],
          correct: 1,
          rationale:
            "Choice B points to a present-day legacy (place names, an enduring idea), which conveys lasting influence.",
        },
      ],
    },

    /* ---------------------------------------------------------
       SECTION 2  ·  MATH  ·  MODULE 1
       --------------------------------------------------------- */
    {
      id: "math1",
      label: "Section 2, Module 1: Math",
      subject: "math",
      minutes: 35,
      directions:
        "The questions in this section address a number of important math skills. Use of a calculator is permitted for all questions. For multiple-choice questions, solve each problem and choose the correct answer from the choices provided. For student-produced response questions, solve each problem and enter your answer as described below. If a fraction answer will not fit in the provided space, enter the decimal equivalent. If the answer is negative, enter a negative sign. Unless otherwise indicated, all variables and expressions represent real numbers, figures are drawn to scale, and the domain of a given function is the set of all real numbers for which the function is defined.",
      questions: [
        {
          question: "If 3x + 7 = 22, what is the value of x?",
          options: ["3", "5", "7", "15"],
          correct: 1,
          rationale: "3x = 15, so x = 5.",
        },
        {
          question:
            "A line in the xy-plane passes through the points (0, 4) and (2, 10). What is the slope of the line?",
          options: ["2", "3", "4", "6"],
          correct: 1,
          rationale: "Slope = (10 − 4) / (2 − 0) = 6 / 2 = 3.",
        },
        {
          question:
            "The function f is defined by f(x) = 2x² − 5. What is the value of f(3)?",
          options: ["1", "7", "13", "31"],
          correct: 2,
          rationale: "f(3) = 2(9) − 5 = 18 − 5 = 13.",
        },
        {
          question:
            "A rectangle has a length that is 3 times its width. If the perimeter is 64 inches, what is the width, in inches?",
          options: ["8", "12", "16", "24"],
          correct: 0,
          rationale:
            "Let width = w. Then 2(3w) + 2w = 8w = 64, so w = 8.",
        },
        {
          question:
            "In a survey of 200 students, 45% said they walk to school. How many students said they walk to school?",
          options: ["45", "80", "90", "110"],
          correct: 2,
          rationale: "0.45 × 200 = 90.",
        },
        {
          passage:
            "A candle burns at a constant rate. After 2 hours the candle is 18 cm tall, and after 5 hours it is 12 cm tall.",
          question:
            "Which equation gives the height h, in centimeters, of the candle after t hours?",
          options: [
            "h = 22 − 2t",
            "h = 18 − 2t",
            "h = 20 − t",
            "h = 24 − 3t",
          ],
          correct: 0,
          rationale:
            "Rate = (12 − 18)/(5 − 2) = −2 cm/hr. At t = 2, h = 18, so h = 18 + (−2)(t − 2) = 22 − 2t.",
        },
        {
          question:
            "If x² = 49 and x < 0, what is the value of x?",
          type: "spr",
          answers: ["-7"],
          rationale: "The negative square root of 49 is −7.",
        },
        {
          question:
            "The expression (x + 3)(x − 5) is equivalent to which of the following?",
          options: [
            "x² − 2x − 15",
            "x² + 2x − 15",
            "x² − 8x + 15",
            "x² − 15",
          ],
          correct: 0,
          rationale:
            "(x + 3)(x − 5) = x² − 5x + 3x − 15 = x² − 2x − 15.",
        },
        {
          question:
            "A car travels 150 miles in 2.5 hours. At this rate, how many miles will it travel in 4 hours?",
          options: ["225", "240", "250", "260"],
          correct: 1,
          rationale: "Rate = 150 / 2.5 = 60 mph. 60 × 4 = 240 miles.",
        },
        {
          question:
            "What is the value of 8 + 12 ÷ (5 − 2)?",
          type: "spr",
          answers: ["12"],
          rationale: "5 − 2 = 3; 12 ÷ 3 = 4; 8 + 4 = 12.",
        },
        {
          question:
            "The equation y = 1.08x models the cost y, in dollars, of an item with a listed price of x dollars after an 8% sales tax. What does 1.08 represent in this context?",
          options: [
            "The sales tax rate as a percent",
            "The listed price before tax",
            "The total cost as a fraction of the listed price",
            "The amount of tax in dollars",
          ],
          correct: 2,
          rationale:
            "Multiplying the price by 1.08 gives the total as 108% of the listed price, i.e., the total cost as a fraction of the listed price.",
        },
        {
          question:
            "If 5(x − 2) = 3x + 4, what is the value of x?",
          type: "spr",
          answers: ["7"],
          rationale:
            "5x − 10 = 3x + 4 → 2x = 14 → x = 7.",
        },
      ],
    },

    /* ---------------------------------------------------------
       SECTION 2  ·  MATH  ·  MODULE 2
       --------------------------------------------------------- */
    {
      id: "math2",
      label: "Section 2, Module 2: Math",
      subject: "math",
      minutes: 35,
      directions:
        "The questions in this section address a number of important math skills. Use of a calculator is permitted for all questions. For multiple-choice questions, solve each problem and choose the correct answer from the choices provided. For student-produced response questions, solve each problem and enter your answer as described below. Unless otherwise indicated, all variables and expressions represent real numbers, figures are drawn to scale, and the domain of a given function is the set of all real numbers for which the function is defined.",
      questions: [
        {
          question:
            "The quadratic function g is defined by g(x) = (x − 4)² − 9. What is the minimum value of g(x)?",
          options: ["−9", "−4", "4", "16"],
          correct: 0,
          rationale:
            "The vertex form shows a minimum at x = 4, where g(4) = −9.",
        },
        {
          question:
            "If √(x + 5) = 6, what is the value of x?",
          type: "spr",
          answers: ["31"],
          rationale: "Squaring gives x + 5 = 36, so x = 31.",
        },
        {
          question:
            "A circle in the xy-plane has equation (x − 2)² + (y + 3)² = 25. What is the radius of the circle?",
          options: ["3", "5", "12.5", "25"],
          correct: 1,
          rationale: "The right side is r², and √25 = 5.",
        },
        {
          question:
            "The system of equations y = 2x + 1 and y = −x + 7 has solution (a, b). What is the value of a?",
          type: "spr",
          answers: ["2"],
          rationale:
            "2x + 1 = −x + 7 → 3x = 6 → x = 2.",
        },
        {
          question:
            "A population of bacteria doubles every 3 hours. If the population starts at 500, which expression gives the population after t hours?",
          options: [
            "500 · 2^(t/3)",
            "500 · 3^(t/2)",
            "500 · 2^(3t)",
            "500 + 2t/3",
          ],
          correct: 0,
          rationale:
            "Doubling every 3 hours means multiplying by 2 for each t/3 interval: 500 · 2^(t/3).",
        },
        {
          question:
            "In triangle ABC, angle B is a right angle. If AB = 6 and BC = 8, what is the length of AC?",
          options: ["10", "12", "14", "48"],
          correct: 0,
          rationale:
            "AC = √(6² + 8²) = √100 = 10.",
        },
        {
          question:
            "The mean of five numbers is 20. If a sixth number, 32, is added to the set, what is the mean of the six numbers?",
          options: ["21", "22", "24", "26"],
          correct: 1,
          rationale:
            "Sum of five = 100. New sum = 132. 132 / 6 = 22.",
        },
        {
          question:
            "If f(x) = 3x − 4 and f(x) = 11, what is the value of x?",
          type: "spr",
          answers: ["5"],
          rationale: "3x − 4 = 11 → 3x = 15 → x = 5.",
        },
        {
          question:
            "A store increases the price of a jacket from $80 to $92. What is the percent increase in the price?",
          options: ["12%", "13%", "15%", "18%"],
          correct: 2,
          rationale:
            "Increase = 12. 12 / 80 = 0.15 = 15%.",
        },
        {
          question:
            "Which of the following is a solution to the equation x² − 6x + 8 = 0?",
          options: ["x = 1", "x = 2", "x = 3", "x = 6"],
          correct: 1,
          rationale:
            "x² − 6x + 8 = (x − 2)(x − 4), so x = 2 or x = 4.",
        },
        {
          question:
            "The line y = kx + 3 passes through the point (4, 15). What is the value of k?",
          type: "spr",
          answers: ["3"],
          rationale: "15 = 4k + 3 → 4k = 12 → k = 3.",
        },
        {
          question:
            "A cylinder has a radius of 3 cm and a height of 10 cm. What is the volume of the cylinder, in cubic centimeters? (Use V = πr²h.)",
          options: ["30π", "60π", "90π", "180π"],
          correct: 2,
          rationale: "V = π(3²)(10) = π(9)(10) = 90π.",
        },
      ],
    },
  ],
};
