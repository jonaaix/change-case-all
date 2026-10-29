import {
   Case,
   isLowerCase,
   isUpperCase,
   localeLowerCase,
   localeUpperCase,
   lowerCase,
   lowerCaseFirst,
   spongeCase,
   swapCase,
   titleCase,
   upperCase,
   upperCaseFirst,
} from '../dist';

import { describe, it, expect } from 'vitest';

describe('The extended modules of change-case', () => {
   let expression = 'MyName-is_peter parker__and--I-amCool';

   it('should camelCase the expression', () => {
      expect(lowerCase).toBeDefined();
      expect(lowerCase(expression)).toEqual('myname-is_peter parker__and--i-amcool');
   });

   it('should localeLowerCase the expression', () => {
      expect(localeLowerCase).toBeDefined();
      expect(localeLowerCase(expression, 'EN')).toEqual('myname-is_peter parker__and--i-amcool');
   });

   it('should lowerCaseFirst the expression', () => {
      expect(lowerCaseFirst).toBeDefined();
      expect(lowerCaseFirst(expression)).toEqual('myName-is_peter parker__and--I-amCool');
   });

   it('should spongeCase the expression', () => {
      expect(spongeCase).toBeDefined();
      // Result varies on each run
      // expect(spongeCase(expression)).toEqual('mynAme-iS_pETEr paRkER__ANd--i-AMCool');
   });

   it('should swapCase the expression', () => {
      expect(swapCase).toBeDefined();
      expect(swapCase(expression)).toEqual('mYnAME-IS_PETER PARKER__AND--i-AMcOOL');
   });

   it('should titleCase the expression', () => {
      expect(titleCase).toBeDefined();
      expect(titleCase(expression)).toEqual('MyName-Is_peter Parker__and--I-amCool');
   });

   it('should not corrupt subsequent titleCase calls after a failed call', () => {
      expect(() => titleCase(null as unknown as string)).toThrow(TypeError);
      expect(titleCase('hello world')).toEqual('Hello World');
      expect(() => Case.title(undefined as unknown as string)).toThrow(TypeError);
      expect(Case.title('hello world')).toEqual('Hello World');
   });

   it('should upperCase the expression', () => {
      expect(upperCase).toBeDefined();
      expect(upperCase(expression)).toEqual('MYNAME-IS_PETER PARKER__AND--I-AMCOOL');
   });

   it('should localeUpperCase the expression', () => {
      expect(localeUpperCase).toBeDefined();
      expect(localeUpperCase(expression, 'EN')).toEqual('MYNAME-IS_PETER PARKER__AND--I-AMCOOL');
   });

   it('should upperCaseFirst the expression', () => {
      expect(upperCaseFirst).toBeDefined();
      expect(upperCaseFirst(expression)).toEqual('MyName-is_peter parker__and--I-amCool');
   });

   it('should test expression isUpperCase', () => {
      expect(isUpperCase).toBeDefined();
      expect(isUpperCase(expression)).toBeFalsy();
   });

   it('should test expression isLowerCase', () => {
      expect(isLowerCase).toBeDefined();
      expect(isLowerCase(expression)).toBeFalsy();
   });
});
