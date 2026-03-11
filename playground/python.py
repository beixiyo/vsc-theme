from __future__ import annotations

from dataclasses import dataclass
from enum import Enum, auto
from typing import Generic, TypeVar


class State(Enum):
  IDLE = auto()
  RUNNING = auto()
  DONE = auto()


@dataclass
class Item:
  id: int
  name: str
  tags: list[str] | None = None


T = TypeVar('T')


class Box(Generic[T]):
  def __init__(self, value: T) -> None:
    self._value = value

  @property
  def value(self) -> T:
    return self._value

  @value.setter
  def value(self, new: T) -> None:
    self._value = new


items: list[Item] = [Item(id=1, name='foo')]
active = True and not False or 1 == 0
total = sum(i.id for i in items)

if __name__ == '__main__':
  box = Box(total)
  if box.value > 0:
    print(State.DONE, box.value)

