import { Localization } from './ilocalization';

export interface ILocalizedComponent {
  localizedStrings(): Localization;
  currentLocalization(): string;
}
