
ServerEvents.recipes(event => {

  // 删除细剑配方以解决和鱼刀的冲突问题
  event.remove({ output: 'simplyswords:iron_rapier' })
  event.remove({ output: 'simplyswords:gold_rapier' })
  event.remove({ output: 'simplyswords:diamond_rapier' })
  

  // 删除这个啥忘了。。。
  event.remove({ output: 'locusazzurro_icaruswings:demeter' })
  event.remove({ output: 'immersive_armors:wooden_helmet' })
  event.remove({ output: 'locusazzurro_icaruswings:ikaros_wings' })
  event.remove({ output: 'locusazzurro_icaruswings:hiyori_wings' })
  event.remove({ output: 'locusazzurro_icaruswings:melan_wings' })
  event.remove({ output: 'simplyswords:iron_sai' })
  event.remove({ output: 'immersive_aircraft:enhanced_propeller' })

  // 删除没啥用的东西
  event.remove({ output: 'crabbersdelight:pufferfish_slice' })

  // 添加骨头合成配方
  event.shapeless(
      Item.of('minecraft:bone', 1), 
      [	       
      '4x minecraft:rotten_flesh'
      ]
  )

  // 添加火药合成配方
  event.shapeless(
    Item.of('minecraft:gunpowder', 4), 
    [	       
    'minecraft:coal',
    'minecraft:gravel'
    ]
)

  event.shapeless(
    Item.of('minecraft:gunpowder', 4), 
    [	       
    'minecraft:charcoal',
    'minecraft:gravel'
    ]
)

  // 添加烈焰棒冶炼配方
  event.blasting('minecraft:blaze_rod', 'kubejs:iron_rod')

  // 添加石英切割配方
  event.stonecutting('3x minecraft:quartz', 'minecraft:polished_diorite')

  // 添加紫颂果合成配方
  event.shapeless(
      Item.of('minecraft:chorus_fruit', 1), 
      [	       
      'minecraft:apple',
      'minecraft:purple_dye',
      'minecraft:ender_pearl'
      ]
  )

  event.shapeless(
    Item.of('minecraft:chorus_flower', 1), 
    [	       
    'minecraft:apple',
    'minecraft:purple_dye',
    'minecraft:ender_pearl',
    'minecraft:poppy',
    'minecraft:allium'
    ]
)

  // 添加末地石合成配方
  event.shaped(
      Item.of('minecraft:end_stone', 8), 
      [
        'AAA',
        'ABA', 
        'AAA'
      ],
      {
        A: 'minecraft:stone',
        B: 'minecraft:ender_pearl'
      }
    )
  event.shaped(
      Item.of('minecraft:end_stone', 8), 
      [
        'AAA',
        'ABA', 
        'AAA'
      ],
      {
        A: 'minecraft:cobblestone',
        B: 'minecraft:ender_pearl'
      }
    )

  // 添加末影珍珠合成配方
  event.shapeless(
      Item.of('minecraft:ender_pearl', 2), 
      [	       
      'minecraft:ender_pearl',
      '2x minecraft:emerald'
      ]
  )

  // 添加岩浆块冶炼配方
  event.blasting('minecraft:magma_block', 'minecraft:netherrack')

  // 添加铁棒合成配方
  event.shaped(
    Item.of('kubejs:iron_rod', 2),
    [
      'A  ',
      'A  ', 
      '   '
    ],
    {
      A: 'minecraft:iron_ingot'
    }
  )

  // 添加下界合金碎片合成配方
  event.shaped(
    Item.of('minecraft:netherite_scrap', 1), 
    [
      'A A',
      ' B ', 
      'CCC'
    ],
    {
      A: 'minecraft:diamond',
      B: 'minecraft:gold_ingot',
      C: 'minecraft:blaze_powder'
    }
  )

  // 添加鞘翅合成配方
  event.shaped(
    Item.of('minecraft:elytra', 1), 
    [
      ' A ',
      'ABA', 
      ' A '
    ],
    {
      A: 'minecraft:ender_eye',
      B: 'locusazzurro_icaruswings:feather_wings'
    }
  )

  // 删除嬗变台合成配方
  event.remove({ output: 'alexsmobs:transmutation_table' })

  // 添加灵魂沙合成配方
  event.shapeless(
    Item.of('minecraft:soul_sand', 1), 
    [	       
    'minecraft:sandstone',
    'minecraft:gravel'
    ]
  )

  event.shapeless(
    Item.of('minecraft:soul_sand', 2), 
    [	       
    'minecraft:soul_sand',
    'minecraft:sand'
    ]
  )

  // 添加灵魂土合成配方
  event.shapeless(
    Item.of('minecraft:soul_soil', 2), 
    [	       
    'minecraft:soul_soil',
    'minecraft:dirt'
    ]
  )

  // 添加黑石烟熏配方
  event.smoking('minecraft:blackstone', 'minecraft:deepslate')
  event.smoking('minecraft:blackstone', 'minecraft:cobbled_deepslate')

  // 添加地狱疣合成配方
  event.shapeless(
    Item.of('minecraft:nether_wart', 1), 
    [	       
    'minecraft:red_mushroom',
    'minecraft:spider_eye'
    ]
  )

  event.shapeless(
    Item.of('minecraft:nether_wart', 2), 
    [	       
    'minecraft:nether_wart',
    '2x minecraft:spider_eye'
    ]
  )

  // 添加下界之星合成配方
  event.shaped(
    Item.of('minecraft:nether_star', 1), 
    [
      'BCB',
      'DAD', 
      'BCB'
    ],
    {
      A: 'minecraft:netherite_ingot',
      B: 'minecraft:diamond_block',
      C: 'minecraft:gold_block',
      D: 'minecraft:emerald_block'
    }
  )

  // 添加下界砖冶炼配方
  event.blasting('minecraft:nether_brick', 'minecraft:brick')

  // 添加幻翼膜合成配方
  event.shapeless(
    Item.of('minecraft:phantom_membrane', 1), 
    [	       
    '2x minecraft:feather',
    '2x minecraft:string'
    ]
  )

  // 添加压缩干粪合成配方
  event.shapeless(
    Item.of('kubejs:compressed_dry_manure', 1), 
    [	       
    '4x manure:manure'
    ]
  )

  // 添加绿茶叶合成配方
  event.shapeless(
    Item.of('herbalbrews:green_tea_leaf', 1), 
    [	       
    '2x herbalbrews:rooibos_leaf'
    ]

    )
    // 添加荧石粉合成配方
 event.shapeless(
    Item.of('minecraft:glowstone_dust', 3), 
     [	       
    'minecraft:blaze_powder',
    'minecraft:coal'
     ]
  )

// 烤派蒙
event.campfireCooking('kubejs:burnt_paimon', 'kubejs:paimon')

  // 添加龙首合成配方
  event.shaped(
    Item.of('minecraft:dragon_head', 1), 
    [
      ' B ',
      'BAB', 
      'CCC'
    ],
    {
      A: 'iceandfire:dragon_skull_fire',
      B: 'minecraft:ender_eye',
      C: 'iceandfire:pixie_dust'
    }
  )

  // 添加龙首合成配方
  event.shaped(
    Item.of('minecraft:dragon_head', 1), 
    [
      ' B ',
      'BAB', 
      'CCC'
    ],
    {
      A: 'iceandfire:dragon_skull_ice',
      B: 'minecraft:ender_eye',
      C: 'iceandfire:pixie_dust'
    }
  )

  // 添加龙首合成配方
  event.shaped(
    Item.of('minecraft:dragon_head', 1), 
    [
      ' B ',
      'BAB', 
      'CCC'
    ],
    {
      A: 'iceandfire:dragon_skull_lightning',
      B: 'minecraft:ender_eye',
      C: 'iceandfire:pixie_dust'
    }
  )

  // 下界合金升级
  event.shaped(
    Item.of('minecraft:netherite_upgrade_smithing_template', 1), 
    [
      'CBC',
      'BAB', 
      'CBC'
    ],
    {
      A: 'minecraft:diamond',
      B: 'minecraft:netherite_ingot',
      C: 'minecraft:netherrack'
    }
  )

  // 添加下界岩冶炼配方
  event.blasting('minecraft:netherrack', 'minecraft:deepslate')

  // 添加炎风罐冶炼配方
  event.blasting('locusazzurro_icaruswings:nether_air_jar', 'locusazzurro_icaruswings:zephir_air_jar')

  // 添加面包片交换合成配方
  event.shapeless(
    Item.of('eggdelight:bread_slice', 1), 
    [	       
    'some_assembly_required:bread_slice'
    ]
 )
  event.shapeless(
    Item.of('some_assembly_required:bread_slice', 1), 
    [	       
    'eggdelight:bread_slice'
    ]
  )


  // 添加凋零头合成
  event.shaped(
    Item.of('minecraft:wither_skeleton_skull', 1), 
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'minecraft:skeleton_skull',
      B: 'iceandfire:witherbone'
    }
  )

  // 添加厨刀交换合成配方
  event.shapeless(
    Item.of('eggdelight:bread_slice', 1), 
    [	       
    'some_assembly_required:bread_slice'
    ]
 )
  event.shapeless(
    Item.of('some_assembly_required:bread_slice', 1), 
    [	       
    'eggdelight:bread_slice'
    ]
  )

  // 添加龙息合成配方
  event.shapeless(
    Item.of('minecraft:dragon_breath', 1), 
    [	       
    'iceandfire:fire_dragon_heart',
    'minecraft:glass_bottle'
    ]
  )
  event.shapeless(
    Item.of('minecraft:dragon_breath', 1), 
    [	       
    'iceandfire:ice_dragon_heart',
    'minecraft:glass_bottle'
    ]
  )
  event.shapeless(
    Item.of('minecraft:dragon_breath', 1), 
    [	       
    'iceandfire:lightning_dragon_heart',
    'minecraft:glass_bottle'
    ]
  )

  // 添加地狱大豆合成配方
  event.shaped(
    Item.of('tofucraft:seeds_soybeans_nether', 8), 
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'tofucraft:seeds_soybeans',
      B: 'minecraft:netherrack'
    }
  )

  // 添加灵魂大豆合成配方
  event.shaped(
    Item.of('tofucraft:seeds_soybeans_soul', 8), 
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'tofucraft:seeds_soybeans',
      B: 'minecraft:soul_sand'
    }
  )

  // 添加下界精髓合成配方
  event.shapeless(
    Item.of('locusazzurro_icaruswings:nether_essence', 1), 
    [	       
    '9x minecraft:magma_cream'
    ]
  )

  // 添加虚无精髓合成配方
  event.shapeless(
    Item.of('locusazzurro_icaruswings:void_essence', 1), 
    [	       
    '9x minecraft:ender_pearl'
    ]
  )

  // 添加酱兑换油合成配方
  event.shapeless(
    Item.of('tofucraft:bottle_soysause', 1), 
    [	       
    'youkaishomecoming:soy_sauce_bottle'
    ]
  )

  // 添加酱兑换油合成配方
  event.shapeless(
    Item.of('tofucraft:bottle_soysause', 1), 
    [	       
    'sushigocrafting:soy_sauce'
    ]
  )

  // 添加石英矿合成配方
  event.shapeless(
    Item.of('minecraft:nether_quartz_ore', 1), 
    [	       
    'minecraft:netherrack',
    'minecraft:quartz'
    ]
  )

  // 添加灵风精髓合成配方
  event.shaped(
    Item.of('locusazzurro_icaruswings:zephir_essence', 1), 
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'minecraft:lapis_lazuli',
      B: 'minecraft:diamond',
      C: 'minecraft:amethyst_shard'
    }
 )

  // 添加秘银棍合成配方
  event.shaped(
    Item.of('kubejs:mithril_rod', 1), 
    [
      '  A',
      ' B ',
      'A  '
    ],
    {
      A: 'fantasycraft:mithril_block',
      B: 'iceandfire:dragonsteel_fire_ingot'
    }
 )

  // 添加季节变更器合成配方
  event.shaped(
    Item.of('kubejs:season_selector', 1), 
    [
      ' C ',
      'CAC',
      'BBB'
    ],
    {
      A: 'sereneseasons:season_sensor',
      B: 'fantasycraft:mithril_block',
      C: 'kubejs:paimon'
    }
 )

  // 添加原初合金合成配方
  event.shaped(
    Item.of('kubejs:primary_ingot', 1), 
    [
      'BAB',
      'ACA',
      'BDB'
    ],
    {
      A: 'locusazzurro_icaruswings:demeter_charge',
      B: 'fantasycraft:mithril_block',
      C: 'iceandfire:hydra_heart',
      D: 'mca:scythe'
    }
 )

  // 添加原初合金合成配方
  event.shaped(
    Item.of('kubejs:primary_ingot', 2), 
    [
      'BDB',
      'BCB',
      'BAB'
    ],
    {
      A: 'locusazzurro_icaruswings:demeter_charge',
      B: 'fantasycraft:mithril_block',
      C: 'kubejs:primary_ingot',
      D: 'kubejs:paimon'
    }
 )

  // 添加原初开天合成配方
  event.shaped(
    Item.of('kubejs:lateinos', 1), 
    [
      ' BB',
      ' AB',
      'A B'
    ],
    {
      A: 'kubejs:mithril_rod',
      B: 'kubejs:primary_ingot'
    }
 )

  // 添加渔网合成配方
  event.shaped(
    Item.of('tropicraft:fishing_net', 1), 
    [
      '  A',
      ' AB',
      'ABB'
    ],
    {
      A: 'tropicraft:bamboo_stick',
      B: 'minecraft:string'
    }
 )

  // 添加苹果橡树树苗合成配方
  event.shaped(
    Item.of('fruitfulfun:apple_sapling', 1), 
    [
      ' B ',
      'BAB',
      '   '
    ],
    {
      A: 'minecraft:oak_sapling',
      B: 'minecraft:apple'
    }
 )

  // 添加凋零之骨合成配方
  event.shaped(
    Item.of('iceandfire:witherbone', 2), 
    [
      'BBB',
      'BAB',
      'BBB'
    ],
    {
      A: 'iceandfire:witherbone',
      B: 'minecraft:bone'
    }
 )

  // 添加经验修补附魔师合成配方
  event.shapeless(
    Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1), 
    [	       
    '3x minecraft:enchanted_book'
    ]
  )

  // 添加绯红菌块合成配方
  event.shapeless(
    Item.of('minecraft:crimson_nylium', 1), 
    [	       
    '2x minecraft:netherrack'
    ]
  )

  // 添加诡异菌块合成配方
  event.shapeless(
    Item.of('minecraft:warped_nylium', 1), 
    [	       
    '3x minecraft:netherrack'
    ]
  )

  // 添加鲑鱼桶合成配方
  event.shapeless(
    Item.of('minecraft:salmon_bucket', 1), 
    [	       
    '1x minecraft:water_bucket',
    '1x minecraft:salmon'
    ]
  )

  // 奇奇怪怪的合成
  event.shaped(
    Item.of('simplyswords:tampered_remnant', 1), 
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'simplyswords:contained_remnant',
      B: 'locusazzurro_icaruswings:void_essence'
    }
 )
});

ItemEvents.foodEaten(event => {
const player = event.player;
if (player !=null && player.getMaxHealth() == 70) {
  // 挑战
    event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:delicious_world_food`);
}
});

// 降低女仆生成
EntityEvents.spawned("touhou_little_maid:fairy", event => {
      if (Math.random() <= 0.80) {
        event.cancel()
      }
})

// 降低僵尸生成
EntityEvents.spawned("minecraft:zombie", event => {
  if (Math.random() <= 0.25) {
    event.cancel()
  }
})

// 降低蜘蛛生成
EntityEvents.spawned("minecraft:spider", event => {
  if (Math.random() <= 0.25) {
    event.cancel()
  }
})

// 降低洞穴蜘蛛生成
EntityEvents.spawned("minecraft:cave_spider", event => {
  if (Math.random() <= 0.15) {
    event.cancel()
  }
})

// 降低溺尸生成
EntityEvents.spawned("minecraft:drowned", event => {
  if (Math.random() <= 0.25) {
    event.cancel()
  }
})

// 降低轻语灵生成
EntityEvents.spawned("alexsmobs:murmur", event => {
  if (Math.random() <= 0.65) {
    event.cancel()
  }
})

// 恶心一下喜欢乱改的人
EntityEvents.spawned("minecraft:piglin", event => {
  if (Math.random() <= 0.99) {
    event.cancel()
  }
})

// 恶心一下喜欢乱改的人
EntityEvents.spawned("minecraft:piglin_brute", event => {
  if (Math.random() <= 0.99) {
    event.cancel()
  }
})

BlockEvents.rightClicked("kubejs:core", event => {
const bid = event.block.id;
const player = event.player;

// 末地门提醒
if(bid == "minecraft:end_portal_frame" && player.getMainHandItem() == "minecraft:ender_eye"){
  event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§c你要前往的维度被未知的存在抹除了"`)
}

});

ItemEvents.crafted('kubejs:compressed_dry_manure', event => {
  // 压缩干粪成就
  const player = event.player;
  event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:compressed_dry_manure`);
})

ItemEvents.crafted('minecraft:water_bucket', event => {
  // 水似乎不一样了
  const player = event.player;
  event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:water`);
})

// 默认关闭生物破坏和火焰蔓延
ServerEvents.loaded(event => {
  event.server.runCommandSilent(`gamerule mobGriefing false`);
  event.server.runCommandSilent(`gamerule doFireTick false`);
});

let paimon = 0.005
let ancient_diary = 0.001
let broken_contract = 0.007
let warhead = 0.001
let stone_mask = 0.0005

BlockEvents.broken("minecraft:dirt", event => {
  const player = event.player
    if (player.isAdvancementDone("afop:paimon")) {
          paimon = 0
    } else {
      paimon = 0.005
    }
    if (player.isAdvancementDone("afop:sweet_story")) {
      ancient_diary = 0

  } else {
    ancient_diary = 0.001
}

})

BlockEvents.broken("minecraft:pink_petals", event => {
  const player = event.player
  if (player.isAdvancementDone("afop:inexplicable_grief")) {
      broken_contract = 0
  } else {
    broken_contract = 0.007
  }

})

BlockEvents.broken("minecraft:stone", event => {
  const player = event.player
  if (player.isAdvancementDone("afop:dangerous_things")) {
    warhead = 0

  } else {
    warhead = 0.001
  }

})

BlockEvents.broken("minecraft:sand", event => {
  const player = event.player
  if (player.isAdvancementDone("afop:looks_like_fun")) {
    stone_mask = 0

  } else {
    stone_mask = 0.0005
  }

})

ServerEvents.blockLootTables(event => {
  event.addBlock("minecraft:dirt", loot=>{
      loot.addPool(pool=>{
        // 挖出派蒙
        pool.addItem("kubejs:paimon");
        pool.randomChance(paimon);
    })

      loot.addPool(pool=>{
        // 挖出日记本
        pool.addItem("kubejs:ancient_diary");
        pool.randomChance(ancient_diary);
    })

    loot.addPool(pool=>{
      pool.addItem("minecraft:dirt");
    })

  })

  event.addBlock("minecraft:pink_petals", loot => {

      loot.addPool(pool => {
          pool.addItem("kubejs:broken_contract")
          pool.randomChance(broken_contract)
      })

      loot.addPool(pool => {
        pool.addItem("4x minecraft:pink_petals")
    })

      loot.addPool(pool => {
        pool.addItem("minecraft:pink_petals")
        pool.randomChance(0.05)
    })

  })

  event.addBlock("minecraft:sand", loot=>{

    loot.addPool(pool=>{
      pool.addItem("kubejs:stone_mask");
      pool.randomChance(stone_mask);
  })

  loot.addPool(pool=>{
    pool.addItem("minecraft:sand");
  })

  })

  event.addBlock("minecraft:stone", loot => {

      loot.addPool(pool =>{
        pool.addItem("kubejs:warhead")
        pool.randomChance(warhead)
      })

      loot.addPool(pool => {
        pool.addCondition({
          condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {
                                min: 1
                            }
                        }
                    ]
                }
        });
        pool.addItem("minecraft:stone");
    });

    loot.addPool(pool => {
        pool.addCondition({
          condition: "minecraft:inverted",
          term: {
              condition: "minecraft:match_tool",
              predicate: {
                  enchantments: [
                      {
                          enchantment: "minecraft:silk_touch",
                          levels: {
                              min: 1
                          }
                      }
                  ]
              }
          }
        });
        pool.addItem("minecraft:cobblestone");
    });

  })

  event.addBlock("minecraft:deepslate", loot => {

    loot.addPool(pool =>{
      pool.addItem("iceandfire:witherbone")
      pool.randomChance(0.015)
    })

    loot.addPool(pool =>{
      pool.addItem("minecraft:shulker_shell")
      pool.randomChance(0.02)
    })

    loot.addPool(pool => {
      pool.addCondition({
        condition: "minecraft:match_tool",
              predicate: {
                  enchantments: [
                      {
                          enchantment: "minecraft:silk_touch",
                          levels: {
                              min: 1
                          }
                      }
                  ]
              }
      });
      pool.addItem("minecraft:deepslate");
  });

  loot.addPool(pool => {
      pool.addCondition({
        condition: "minecraft:inverted",
        term: {
            condition: "minecraft:match_tool",
            predicate: {
                enchantments: [
                    {
                        enchantment: "minecraft:silk_touch",
                        levels: {
                            min: 1
                        }
                    }
                ]
            }
        }
      });
      pool.addItem("minecraft:cobbled_deepslate");
  });
  })
})

ServerEvents.fishingLootTables(event => {

event.addFishing("minecraft:junk", loot => {

  loot.addPool(pool => {
      pool.addItem("kubejs:drift_bottle")
      pool.randomChance(0.1);
  })

  loot.addPool(pool=>{
    pool.addItem("minecraft:arrow")
    pool.addItem("minecraft:rotten_flesh")
    pool.addItem('minecraft:stick')
    pool.addItem('minecraft:bone')
    pool.addItem("minecraft:tripwire")
    pool.addItem('supplementaries:antique_ink')
    pool.addItem("minecraft:lily_pad")
    pool.addItem("minecraft:leather_boots")
    pool.addItem("minecraft:potatoes")
  })

})

})

let undigested_mutton = 0.03
let sunny_doll = 0.01
let broken_white_clothes = 0.03

ServerEvents.entityLootTables(event => {

  event.addEntity("minecraft:wolf", loot =>{
    
      loot.addPool(pool => {

          pool.addItem("kubejs:undigested_mutton")
          pool.randomChance(undigested_mutton);

      })

  })
  event.addEntity("touhou_little_maid:fairy", loot => {

      loot.addPool(pool =>{
        pool.addItem("kubejs:sunny_doll")
        pool.randomChance(sunny_doll);
      })

  })
  event.addEntity("aether:aerwhale", loot =>{
    
    loot.addPool(pool => {

        pool.addItem("kubejs:broken_white_clothes")
        pool.randomChance(broken_white_clothes);

    })

  })

  event.addEntity("tofucraft:tofuslime", loot =>{
    
    loot.addPool(pool => {

        pool.addItem("tofucraft:tofustick")
        pool.randomChance(0.01)

    })

    loot.addPool(pool => {

      pool.addItem('tofucraft:tofukinu')
      pool.randomChance(0.9)

  })

  loot.addPool(pool => {

    pool.addItem('tofucraft:tofukinu')
    pool.randomChance(0.1)

})

})
})

ItemEvents.pickedUp("kubejs:broken_white_clothes", event => {
  // 给予成就
  const player = event.player;
  event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:broken_white_clothes`);
  
})

ItemEvents.pickedUp("kubejs:warhead", event => {
  // 给予成就
  const player = event.player;
  event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:dangerous_things`);
  
})

ItemEvents.pickedUp("kubejs:paimon", event => {
// 给予成就
const player = event.player;
event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:paimon`);

})

ItemEvents.foodEaten("kubejs:burnt_paimon", event => {
// 给予成就
event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:burnt_paimon`);

})

ItemEvents.pickedUp("kubejs:drift_bottle", event => {
// 给予成就
const player = event.player;
event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:you_on_the_other_side`);

})

ItemEvents.pickedUp("kubejs:ancient_diary", event => {
// 给予成就
const player = event.player;
event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:sweet_story`);

})

ItemEvents.pickedUp("kubejs:broken_contract", event => {
// 给予成就
const player = event.player;
player.
event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:inexplicable_grief`);

})

ItemEvents.pickedUp("kubejs:undigested_mutton", event => {
// 给予成就
const player = event.player;
event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:an_old_friend`);

})

ItemEvents.pickedUp("kubejs:stone_mask", event => {
  // 给予成就
  const player = event.player;
  event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:looks_like_fun`);
  
})

ItemEvents.crafted("kubejs:lateinos", event => {
  const player = event.player;
  event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:i_am_as_tall_as_the_sky`);
})

ItemEvents.rightClicked("kubejs:season_selector", event => {
  const player = event.player;
  event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:passing_of_night`);
})

ItemEvents.rightClicked("kubejs:sunny_doll", event => {

  const player = event.player;
  const world = player.getLevel();

  if (player.getHealth() > 10) {
      // 扣除玩家10点血量
      player.setHealth(player.getHealth() - 10);

      // 设置天气为无天气
      event.server.runCommandSilent(`weather clear`)
      world.getWorldInfo().setRainTime(0);
      world.getWorldInfo().setThunderTime(0);
      world.getWorldInfo().setRaining(false);
      world.getWorldInfo().setThundering(false);

      event.server.runCommandSilent(`title @a actionbar "§b有人借来了不属于他的力量使这片天空放晴..."`)

      event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:i_need_you_more`);
  } else {
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§c这是你目前承受不起的代价"`)
  }

});

ItemEvents.rightClicked("kubejs:stone_mask", event => {

  const player = event.player;

  if (player.getHealth() > 5) {

    player.setHealth(player.getHealth() - 3);

    event.server.runCommandSilent(`effect give ${player.getName().getString()} minecraft:haste 10 4 true`)
    event.server.runCommandSilent(`effect give ${player.getName().getString()} minecraft:strength 10 2 true`)
    event.server.runCommandSilent(`effect give ${player.getName().getString()} minecraft:wither 10 1 true`)

    event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:im_not_a_man_anymore`);

    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b你暂时成为了不完全吸血鬼"`)
  } else {
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§c你现在的状态不足以激活它"`)
  }

});

let season = 1

ItemEvents.rightClicked("kubejs:season_selector", event => {

  const player = event.player;
  season++

  if (season == 1) {
    event.server.runCommandSilent(`/season set EARLY_SPRING`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a孟春"`)
  }
 if (season == 2) {
    event.server.runCommandSilent(`/season set MID_SPRING`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a仲春"`)
  } 
 if (season == 3) {
    event.server.runCommandSilent(`/season set LATE_SPRING`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a季春"`)
  } 
 if (season == 4) {
    event.server.runCommandSilent(`/season set EARLY_SUMMER`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a孟夏"`)
  }
 if (season == 5) {
    event.server.runCommandSilent(`/season set MID_SUMMER`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a仲夏"`)
  }
 if (season == 6) {
    event.server.runCommandSilent(`/season set LATE_SUMMER`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a季夏"`)
  }
 if (season == 7) {
    event.server.runCommandSilent(`/season set EARLY_AUTUMN`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a孟秋"`)
  }
 if (season == 8) {
    event.server.runCommandSilent(`/season set MID_AUTUMN`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a仲秋"`)
  }
 if (season == 9) {
    event.server.runCommandSilent(`/season set LATE_AUTUMN`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a季秋"`)
  }
 if (season == 10) {
    event.server.runCommandSilent(`/season set EARLY_WINTER`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a孟冬"`)
  }
 if (season == 11) {
    event.server.runCommandSilent(`/season set MID_WINTER`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a仲冬"`)
  }
 if (season == 12) {
    event.server.runCommandSilent(`/season set LATE_WINTER`)
    event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b当前季节已设置为 §a季冬"`)
    season = 1
  }

});

import { EntityEvents } from '@kubejs/core';

let CD = 1; 

const bannedItems = [
  'simplyswords:tempest',
  'simplyswords:bramblethorn'
  ];
  
  ItemEvents.rightClicked(bannedItems, event => {
  event.server.runCommandSilent(`title ${event.player.name.string} actionbar "§c这个物品存在潜在问题，请不要使用"`)
  event.cancel()
  })
  
  ItemEvents.rightClicked("aether:life_shard", event => {
    event.server.runCommandSilent(`title ${event.player.name.string} actionbar "§c为防止奇奇怪怪的问题，所以禁了"`)
    event.cancel()
  })

EntityEvents.hurt(event => {
    const entity = event.entity

    if (!entity.isPlayer()) return
    
    const player = entity
    const damage = event.damage
    
    if (player.getHealth() - damage <= 0) {
      
        if (Math.random() <= 0.6 && CD == 1) {
          CD = 3
          event.server.runCommandSilent(`title ${player.getName().getString()} actionbar "§b这是来自某位神明的护佑！"`)
          event.server.runCommandSilent(`effect give ${player.getName().getString()} minecraft:regeneration 7 1 true`)
          event.server.runCommandSilent(`effect give ${player.getName().getString()} minecraft:resistance 7 2 true`)
          event.server.runCommandSilent(`playsound advancementplaques:ui.toast.goal_complete voice ${player.getName().getString()} `)
          event.server.runCommandSilent(`advancement grant ${player.getName().getString()} only afop:god_bless_me_too`);
          event.cancel()


        } else {
          if (CD > 1) { 
            CD--
          } else {
            CD++
          }
        }
    }
});

PlayerEvents.tick(event => {
  const player = event.player
   if (player.getMainHandItem() == "kubejs:lateinos") {
    event.server.runCommandSilent(`effect give ${player.getName().getString()} minecraft:regeneration 1 4 true`)
    event.server.runCommandSilent(`effect give ${player.getName().getString()} minecraft:strength 1 2 true`)
    event.server.runCommandSilent(`effect give ${player.getName().getString()} alexsmobs:knockback_resistance 1 1 true`)
   }
})

EntityEvents.hurt("iceandfire:dread_knight", event => {
  const entity = event.entity
  const damage = event.damage * 3
  entity.setHealth(entity.getHealth() - damage);
});

EntityEvents.hurt("iceandfire:dread_scuttler", event => {
  const entity = event.entity
  const damage = event.damage * 2
  entity.setHealth(entity.getHealth() - damage);
});

EntityEvents.hurt("minecraft:warden", event => {
  const entity = event.entity
  const damage = event.damage * 2
  entity.setHealth(entity.getHealth() - damage);
});

EntityEvents.hurt("minecraft:wither", event => {
  const entity = event.entity
  const damage = event.damage * 0.4
  entity.setHealth(entity.getHealth() + damage);
});

EntityEvents.hurt("aether:valkyrie_queen", event => {
  const entity = event.entity
  const damage = event.damage * 2
  const cordon = entity.getHealth() - damage
  if (cordon <= 0) {
    return
  }
  entity.setHealth(entity.getHealth() - damage);
});

PlayerEvents.loggedOut(event => {
  const player = event.player
  event.server.runCommandSilent(`/gamemode survival ${player.name.string}`)
})

// 恶心一下喜欢乱改的人
EntityEvents.hurt("minecraft:ender_dragon", event => {
  const entity = event.entity
  const damage = event.damage * 0.999999
  entity.setHealth(entity.getHealth() + damage);
});

const chunk = [
  'toms_storage:ts.crafting_terminal',
  'toms_storage:ts.storage_terminal'
  ];

// 区块强加载
BlockEvents.placed(chunk, event => {
  const player = event.player
  const x = parseInt(player.x)
  const z = parseInt(player.z)
  event.server.runCommandSilent(`/forceload add ${x} ${z} ${x} ${z}`)
})

BlockEvents.broken(chunk, event => {
  const player = event.player;
  const x = parseInt(player.x)
  const z = parseInt(player.z)

  if(player.getMainHandItem() == "minecraft:wooden_axe"){
    event.server.runCommandSilent(`/forceload remove ${x} ${z} ${x} ${z}`)
  }
})