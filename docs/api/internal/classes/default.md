[cea](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [plugins](default.md#plugins)

### Methods

- [addPlugin](default.md#addplugin)
- [start](default.md#start)

## Constructors

### constructor

\+ **new default**(): [*default*](default.md)

**Returns:** [*default*](default.md)

## Properties

### plugins

• `Private` **plugins**: *Set*<() => *Promise*<void\>\>

Defined in: [internal/src/index.ts:6](https://github.com/ceajs/cea/blob/8526aa4/internal/src/index.ts#L6)

## Methods

### addPlugin

▸ **addPlugin**(`plugin`: () => *Promise*<void\>): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `plugin` | () => *Promise*<void\> |

**Returns:** *void*

Defined in: [internal/src/index.ts:8](https://github.com/ceajs/cea/blob/8526aa4/internal/src/index.ts#L8)

___

### start

▸ **start**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [internal/src/index.ts:12](https://github.com/ceajs/cea/blob/8526aa4/internal/src/index.ts#L12)
