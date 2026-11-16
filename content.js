// ============================================================
//  EDIT THIS FILE TO UPDATE YOUR SITE.
//  Everything on the page is built from the lists below.
//  - New project  -> copy one block in `projects`, change the text
//  - New job      -> copy one block in `experience`
//  - New skill    -> add a line to `skills`
//  Keep the commas between blocks. Text goes inside 'quotes'.
//  To use an apostrophe inside text, write it as \'  (e.g. NYU\'s)
// ============================================================

window.SITE = {
  name: 'Jason Lee',
  email: 'jasonleeaudio@gmail.com',
  github: 'https://github.com/jasonleeaudio',
  linkedin: 'https://linkedin.com/in/jasonlee0501',
  resume: 'assets/Jason_Lee_Resume.pdf',
  photo: 'assets/jason.jpg',
  intro: 'I build machine learning and signal processing systems for music: recognizing chords and keys, separating sources, and running audio models on-device. M.M. Music Technology at NYU (May 2027) · B.S. Audio & Music Engineering, University of Rochester (May 2025).',

  // Colors you can use: orange '#FFB13B', pink '#FF7AA8', teal '#3DD6C4', lime '#C6F25E', violet '#B39DFF'
  // left / width = where the clip sits on the timeline (just for looks)
  // wip: true = dashed "in progress" clip
  // media: optional image path like 'assets/chord_results.png' (leave '' for none)
  // audio: optional audio path like 'assets/demo.mp3' (leave '' for none)
  projects: [
    {
      name: 'Key Estimation', tag: 'TRANSFORMER · MIR', color: '#FF7AA8', left: 0, width: 50,
      stat: '63%', statLabel: 'accuracy across 24 key classes · ~5,000 FMAK tracks',
      blurb: 'A Transformer trained on ~5,000 FMAK tracks, benchmarked against Krumhansl–Schmuckler DSP and a madmom CNN on accuracy, macro F1 and MIREX weighted score. Pitch-shift augmentation, 10-fold cross-validation, and the leftover errors traced to annotation ambiguity rather than model capacity.',
      tech: ['PyTorch', 'madmom', 'librosa', 'MIREX'],
      repo: '', media: '', audio: ''
    },
    {
      name: 'Chord Recognition', tag: 'DSP VS. DEEP LEARNING', color: '#3DD6C4', left: 10, width: 46,
      stat: '+26', statLabel: 'MIREX points over the DSP baseline · 170-chord vocabulary',
      blurb: 'Chroma template matching vs. CR2+S, a convolutional-recurrent network with structured output heads for chord root, bass and pitch class, on GuitarSet. Scored on seven mir_eval metrics, with failure modes traced to strumming transients and enharmonic spelling.',
      tech: ['PyTorch', 'mir_eval', 'CQT / chroma', 'GuitarSet'],
      repo: 'https://github.com/jasonleeaudio/chord-recognition', media: '', audio: ''
    },
    {
      name: 'Real-Time & Embedded Audio', tag: 'C++ · ESP32 · JUCE', color: '#C6F25E', left: 30, width: 40,
      stat: '97%', statLabel: 'on-device accuracy · quantized classifier on a microcontroller',
      blurb: 'A bare-metal C++ mini-DAW on ESP32 with a tempo-locked looping engine, quantized sequencing and low-latency multi-instrument synthesis. A quantized classifier deployed to a microcontroller, streaming inference over Bluetooth. And a 16-band vocoder plugin built in JUCE.',
      tech: ['C++', 'ESP32', 'JUCE', 'Edge Impulse'],
      repo: '', media: '', audio: ''
    },
    {
      name: 'Stem-Based Cold-Start Recommendation', tag: 'IN PROGRESS · M.M. THESIS', color: '#FFB13B', left: 52, width: 48, wip: true,
      stat: '4 stems', statLabel: 'vocals · drums · bass · other, vs. the full mix',
      blurb: 'Testing whether recommending from separated stems beats full-mix audio for new and low-play tracks, where the audio is the main signal available. Full mixes blur musical cues, like fast drums on a sad song, that per-stem embeddings can keep apart. Running HTDemucs separation on the Music4All-Onion dataset; started as the Splitting the Mix project in NYU\'s Advanced Topics in MIR.',
      tech: ['Python', 'HTDemucs', 'RecSys', 'Music4All-Onion'],
      repo: '', media: '', audio: ''
    }
  ],

  // level = how high the fader sits (0–100, just for looks)
  experience: [
    { label: 'CH 01', org: 'Sound + Science', role: 'Student Mentor', dates: 'Oct 2026 – now', color: '#FFB13B', level: 74,
      desc: 'Teaching NYC high schoolers sound physics, music production and Python audio programming; adapting and writing the lectures.' },
    { label: 'CH 02', org: 'FutureSphere Tutor', role: 'Python Instructor', dates: 'Feb 2026 – now', color: '#3DD6C4', level: 64,
      desc: 'Teaching Python fundamentals to middle schoolers in a Brooklyn weekend program.' },
    { label: 'CH 03', org: 'WORDTheatre', role: 'Audio Editor', dates: 'May 2022 – Sep 2024', color: '#C6F25E', level: 70,
      desc: 'Edited 113 episodes of live short-story recordings and interviews for the weekly podcast.' },
    { label: 'CH 04', org: 'Audio Engineering Society', role: 'President · U of Rochester', dates: 'Aug 2020 – May 2025', color: '#B39DFF', level: 60,
      desc: 'Ran research talks, alumni networking and professional development events for audio engineering students.' },
    { label: 'CH 05', org: 'University of Rochester', role: 'TA · AME 193 Sound Design', dates: 'Jan – May 2025', color: '#FF7AA8', level: 52,
      desc: 'Graded and gave written feedback on student audio projects; kept the lab gear inventory in order.' },
    { label: 'BUS A · EDU', org: 'New York University', role: 'M.M. Music Technology', dates: 'May 2027', color: '#D9D6CE', level: 80,
      desc: 'Thesis in progress: stem-based audio embeddings for cold-start music recommendation. Coursework includes Advanced Topics in MIR.' },
    { label: 'BUS B · EDU', org: 'University of Rochester', role: 'B.S. Audio & Music Engineering', dates: 'May 2025', color: '#D9D6CE', level: 66,
      desc: 'Audio DSP, Audio Software Design I & II, Musical Acoustics, Signals, Audio Electronics, Intro to C/C++.' }
  ],

  // kind: 'lang' | 'ml' | 'dsp' | 'tool'
  skills: [
    ['Python', 'lang'], ['C / C++', 'lang'], ['MATLAB', 'lang'], ['JavaScript', 'lang'],
    ['PyTorch', 'ml'], ['NumPy', 'ml'], ['SciPy', 'ml'], ['scikit-learn', 'ml'], ['Pandas', 'ml'], ['Transformers', 'ml'],
    ['librosa', 'dsp'], ['madmom', 'dsp'], ['mir_eval', 'dsp'], ['Demucs', 'dsp'], ['Chroma', 'dsp'], ['CQT', 'dsp'], ['STFT', 'dsp'], ['MFCCs', 'dsp'], ['HPSS', 'dsp'],
    ['JUCE', 'tool'], ['Edge Impulse', 'tool'], ['Git', 'tool'], ['Arduino IDE', 'tool'], ['Jupyter', 'tool']
  ]
};
