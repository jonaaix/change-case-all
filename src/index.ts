import * as changeCase1 from 'change-case';
import * as spongeCase1 from 'sponge-case';
import * as swapCase1 from 'swap-case';
import * as titleCase1 from 'title-case';

// Exports
export const camelCase = changeCase1.camelCase;
export const capitalCase = changeCase1.capitalCase;
export const constantCase = changeCase1.constantCase;
export const dotCase = changeCase1.dotCase;
export const noCase = changeCase1.noCase;
export const pascalCase = changeCase1.pascalCase;
export const pathCase = changeCase1.pathCase;
export const sentenceCase = changeCase1.sentenceCase;
export const snakeCase = changeCase1.snakeCase;

/** @deprecated Use trainCase instead */
export const headerCase = changeCase1.trainCase;
export const trainCase = changeCase1.trainCase;

/** @deprecated Use kebabCase instead */
export const paramCase = changeCase1.kebabCase;
export const kebabCase = changeCase1.kebabCase;

export const spongeCase = spongeCase1.spongeCase;
export const swapCase = swapCase1.swapCase;
// title-case@3 iterates with a module-level global regex. If a call throws mid-loop (non-string input),
// its lastIndex is left behind and corrupts the next call ('hello world' -> 'O World').
// Calling it with '' resets lastIndex; the original error is rethrown unchanged.
export const titleCase = (input: string): string => {
   try {
      return titleCase1.titleCase(input);
   } catch (error) {
      titleCase1.titleCase('');
      throw error;
   }
};

export const upperCase = (str: string) => str.toUpperCase();
export const localeUpperCase = (str: string, locales?: string | string[]) => str.toLocaleUpperCase(locales);

export const lowerCase = (str: string) => str.toLowerCase();
export const localeLowerCase = (str: string, locales?: string | string[]) => str.toLocaleLowerCase(locales);

export const lowerCaseFirst = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);
export const upperCaseFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const isUpperCase = (str: string) => str === str.toUpperCase();
export const isLowerCase = (str: string) => str === str.toLowerCase();

/**
 * Class with static methods for string manipulation.
 */
export class Case {
   static camel = camelCase;
   static capital = capitalCase;
   static constant = constantCase;
   static dot = dotCase;
   static kebab = kebabCase;
   static lower = lowerCase;
   static lowerFirst = lowerCaseFirst;
   static localeLower = localeLowerCase;
   static localeUpper = localeUpperCase;
   static no = noCase;
   static pascal = pascalCase;
   static path = pathCase;
   static sentence = sentenceCase;
   static snake = snakeCase;
   static sponge = spongeCase;
   static swap = swapCase;
   static title = titleCase;
   static train = trainCase;
   static upper = upperCase;
   static upperFirst = upperCaseFirst;
   static isUpper = isUpperCase;
   static isLower = isLowerCase;
}
