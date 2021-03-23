/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-operators */
/* eslint-disable max-classes-per-file */
class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
      throw new Error('Ошибка');
    }
    this.type = type;
    if (this.type !== 'Bowman' && this.type !== 'Swordsman' && this.type !== 'Magician' && this.type !== 'Daemon' && this.type !== 'Undead' && this.type !== 'Zombie') {
      throw new Error('Ошибка');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack / 100 * 25);
      this.defence += (this.defence / 100 * 25);
      this.health = 100;
    } else { throw new Error('Нельзя повысить уровень погибшего'); }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
class MathCharacter extends Character {
  constructor(name, type, health, level, attack, defence, distance, stoned) {
    super(name, type, health, level, attack, defence);
    this.distance = distance;
    if (distance === 2) {
      this.attack *= 0.9;
    } else if (distance === 3) {
      this.attack *= 0.8;
    } else if (distance === 4) {
      this.attack *= 0.7;
    } else if (distance === 5) {
      this.attack *= 0.6;
    }
    this.stoned = stoned;
    if (this.stoned === true) {
      this.attack -= Math.log2(this.distance) * 5;
    }
  }
}

export class Magician extends MathCharacter {
  constructor(name, distance, stoned) {
    super(name, 'Magician', 100, 1, 100, 40, distance, stoned);
  }
}
export class Daemon extends MathCharacter {
  constructor(name, distance, stoned) {
    super(name, 'Daemon', 100, 1, 100, 40, distance, stoned);
  }
}
export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 0, 1, 25, 25);
  }
}
export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', -5, 1, 40, 10);
  }
}
export class Undead extends Character {
  constructor(name) {
    super(name, '1', 100, 1, 25, 25);
  }
}
export class Zombie extends Character {
  constructor(name) {
    super(name, 'Troll', 100, 1, 40, 10);
  }
}
