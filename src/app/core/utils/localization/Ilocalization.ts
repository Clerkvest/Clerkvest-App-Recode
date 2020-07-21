export class Localization {
  hello?: string = 'hello';
  dashboardPage?: LocalizationDashboard = new LocalizationDashboard();
  loginPage?: LocalizationLogin = new LocalizationLogin();
  language?: LocalizationLanguage = new LocalizationLanguage();
  legal?: LocalizationLegal = new LocalizationLegal();
  profilePage?: ProfilePage = new ProfilePage();
}

class LocalizationDashboard {
  hello?: string = 'Hello there,';
  welcome?: string = 'welcome to your dashboard';
  sectionOne: string = 'Closest projects';
  sectionTwo: string = 'Newest projects';
  sectionThree: string = 'Finished projects';
  sectionFour: string = 'sectionFour';
  sectionFive: string = 'sectionFive';
  sectionSix: string = 'sectionSix';
  sectionSeven: string = 'sectionSeven';
  sectionEight: string = 'sectionEight';
  sectionNine: string = 'sectionNine';
  sectionTen: string = 'sectionTen';
}

class LocalizationLogin {
  inputSection?: LocalizationLoginInput = new LocalizationLoginInput();
  sentSection?: LocalizationLoginSent = new LocalizationLoginSent();
  manuallySection?: LocalizationLoginManually = new LocalizationLoginManually();
}

class LocalizationLoginInput {
  headline?: string = 'Log in';
  textfieldEmailLabel?: string = 'Email address';
  textfieldEmailErrorMsg?: string = 'You need to enter something here';
  rememberLabel?: string = 'Remember login details';
  buttonSend?: string = 'Send link';
  error?: string = 'Unfortunately your login link could not be delivered.';

  legalTextBeforeTerms?: string = 'By proceeding, I accept the';
  legalTextAfterTerms?: string = 'and confirm that I have read';
  legalTextAfterPrivacy?: string = '';

  reCapLegalTextBeforeTerms?: string = 'This page is protected by reCAPTCHA. By continuing I confirm having read Google’s';
  reCapLegalTextAfterTerms?: string = 'and accepted Google’s';
  reCapLegalTextAfterPrivacy?: string = '';
}

class LocalizationLoginSent {
  headline?: string = 'Your login link has been delivered!';
  sentText?: string = 'We have sent you an e-mail with a confirmation link.';
  spamText?: string = 'If you cannot find the email, please check your spam folder.';
  buttonManually?: string = 'Entering Manually';
}

class LocalizationLoginManually {
  headline?: string = 'Authentication';
  textfieldLabel?: string = 'Authentication code';
  textfieldErrorMsg?: string = 'You need to enter something here';
  buttonAuth?: string = 'Authenticate';
  reminderText?: string = 'The authentication code is no longer usable after successful use.';
  error?: string = 'Unfortunately authentication code could not be activated.';
}

class LocalizationLanguage {
  german?: string = 'Deutsch';
  english?: string = 'English';
}

class LocalizationLegal {
  terms?: string = 'Services Terms';
  privacy?: string = 'Privacy Policy';
}

class ProfilePage {
  overviewSection?: Profile = new Profile();
  detailsSection?: ProfileDetails = new ProfileDetails();
  settingsSection?: SettingsPref = new SettingsPref();
  emptyProjectsSection?: EmptyProfileProjectList = new EmptyProfileProjectList();
  emptyInvestmentsSection?: EmptyProfileInvestmentsList = new EmptyProfileInvestmentsList();
}

class Profile {
  editProfile?: string = 'Edit Profile';
  settingsPref?: string = 'Notification Preferences';
  yourProjects?: string = 'Your Projects';
  yourInvestments?: string = 'Your Investments';
  save?: string = 'Save';
}

class ProfileDetails {
  firstname?: string = 'First name';
  lastname?: string = 'Last name';
  nickname?: string = 'Nickname';
}

class SettingsPref {
  projectFunded?: string = 'Project Funded';
  freshComment?: string = 'New Project Comment';
  freshProject?: string = 'New Projects Available';
  nearlyFundedProject?: string = 'Nearly funded Projects';
}

class EmptyProfileProjectList {
  p1?: string = 'You haven\'t created any Projects.';
  p2?: string = 'Realise your own Ideas by creating your own Project.';
  b1?: string = 'Create a Project';
}

class EmptyProfileInvestmentsList {
  p1?: string = 'You haven\'t invested in anything yet.';
  p2?: string = 'Invest in a Project and realise your own Ideas or collaborate with others on a Project.';
}
