import * as migration_20260607_173244 from './20260607_173244';
import * as migration_20260826_testimonials from './20260826_testimonials';

export const migrations = [
  {
    up: migration_20260607_173244.up,
    down: migration_20260607_173244.down,
    name: '20260607_173244'
  },
  {
    up: migration_20260826_testimonials.up,
    down: migration_20260826_testimonials.down,
    name: '20260826_testimonials'
  },
];
