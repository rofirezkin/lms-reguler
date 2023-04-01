const initQuiz = {
  idQuiz: 1,
  timer: 30,
  dataQuiz: [
    {
      id: 1,
      pertanyaan: 'Judul pemograman yang dibawah ini adalah  1',
      option: ['String1', 'Kalimat', 'testing', 'coba'],
      nomor: 1,
    },
    {
      id: 2,
      pertanyaan:
        'yang dibawah ini yang masuk ke tipe Data pemograman adalah :2 ',
      option: ['String 2', 'Kalimat', 'testing', 'coba'],
      nomor: 2,
    },
    {
      id: 3,
      pertanyaan: 'Bahasa Pemograman Python yang termasuk untuk ML adalah 3',
      option: ['String3', 'Kalimat', 'testing', 'coba'],
      nomor: 3,
    },
    {
      id: 4,
      pertanyaan: 'Apa yang dimaksud dengan immutable 4 ',
      option: ['String4', 'Kalimat', 'testing', 'coba'],
      nomor: 4,
    },
    {
      id: 5,
      pertanyaan:
        'Iam running the latest OSX/Flutter/XCode Versions using flutter, android studio and firebase and 1 hour ago everthing works perfectly. 5',
      option: [
        'Flutter clean and pub get',
        'pemogReinstall the ios simulatorraman',
        'testing',
        'coba',
      ],
      nomor: 5,
    },
    {
      id: 6,
      pertanyaan:
        'Go to [About this Mac > Storage > Manage > Developer], thanks, it worked! The only thing - I could not find the latest ios 15.4.1 as a Simulator Image but only 15.2, which is also fine for me 6',
      option: [
        'Just deleting Xcode Cache worked for me.',
        'pAbout this Mac',
        'testing',
        'XCode Caches',
      ],
      nomor: 6,
    },
    {
      id: 7,
      pertanyaan:
        'JFor Mac Ventura 13.0 OS and higher -> Click apple logo on top left of your Mac 7',
      option: [
        'System Settings > search Storage > Developer',

        'Uninstall XCode by moving from Applications folder to the Trash',

        'Download Xcode 13.1 from Apple Developers and not the stable release from App Store',
        'coba',
      ],
      nomor: 7,
    },
    {
      id: 8,
      pertanyaan:
        'Extract the downloaded Xcode_13.1.xip file, i actually recommend via terminal by using xip -x Xcode_13.3.1.xip, and take in mind the extraction uses 100GB and it takes up to 2 hours to complete. You are going to have this message at the beggining xip: signing certificate was "Software Update" (validation not attempted), but you can ignore since this is expected 8',
      option: [
        'Finally, move the extracted XCode file to the Applications folder',

        'Run sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer',
        'Flutter: XCode error "Unable to boot the Simulator"',
        'Let me know if you need more information! Thank you',
      ],
      nomor: 8,
    },
    {
      id: 9,
      pertanyaan: 'Judul pemograman ini adalah  9',
      option: [
        'I recently installed the beta of Xcode Version 6 in OS X Mavericks, with which comes the iOS simulator for iOS 8. Ive managed to successfully run from Xcode 6 beta on a device with iOS 8 Beta, but opening the simulator always get the same error I have tried to change the hardware version of iPhone 4s, iPhone 5, ... in the simulator and still gives the same error: Unable to boot the iOS Simulator',
        'what error log do you see at the console app?',
        'testing',
        'coba',
      ],
      nomor: 9,
    },
    {
      id: 10,
      pertanyaan: 'Judul pemograman ini adalah 10',
      option: [
        'Data Analis',
        'Close Xcode and iOS Simulator (and all related applications)        ',
        'testing',
        'coba',
      ],
      nomor: 10,
    },
    {
      id: 11,
      pertanyaan: 'Judul pemograman ini adalah 11',
      option: [
        'Data Analis 11',
        'Close Xcode and iOS Simulator (and all related applications)        ',
        'testing',
        'coba',
      ],
      nomor: 11,
    },
    {
      id: 12,
      pertanyaan: 'Judul pemograman ini adalah 12',
      option: [
        'Data Analis 12',

        'Close Xcode and iOS Simulator (and all related applications)        ',
        'testing',
        'coba',
      ],
      nomor: 12,
    },
  ],
};

export const quizReducer = (state = initQuiz, action) => {
  //   if (action.type === 'SET_CONTENT') {
  //     return {
  //       ...state,
  //       pemberitahuan: action.value,
  //     };
  //   }

  return state;
};
