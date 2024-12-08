
StartupEvents.registry('item', event => {

    event.create('iron_rod').texture('kubejs:item/iron_rod').displayName('铁棍')

    event.create('compressed_dry_manure').texture('kubejs:item/compressed_dry_manure').displayName('压缩干粪').burnTime(120)

    event.create('paimon').texture('kubejs:item/paimon').displayName('[AFoP]昏睡的派蒙').maxStackSize(17).tooltip(
        Component.darkGray("呼呼呼，旅行者不要我了嘛...")
    )

    event.create('burnt_paimon').texture('kubejs:item/burnt_paimon').displayName('[AFoP]烤糊的派蒙').maxStackSize(17).food(food=>{
        food.meat()
        food.hunger(6)
        food.saturation(1.5)
        food.alwaysEdible(true)
    })

    event.create('ancient_diary').texture('kubejs:item/ancient_diary').displayName('[AFoP]古老的日记本').maxStackSize(7)

    event.create('drift_bottle').texture('kubejs:item/drift_bottle').displayName('[AFoP]来自海的那边').maxStackSize(7).tooltip(
        Component.darkGray("捡到这个漂流瓶的你，是否也处于纷争...")
    )

    event.create('broken_contract').texture('kubejs:item/broken_contract').displayName('[AFoP]有点破损的契约书').maxStackSize(7)

    event.create('undigested_mutton').texture('kubejs:item/undigested_mutton').displayName('[AFoP]还未消化完全的羊肉')

    event.create('sunny_doll').texture('kubejs:item/sunny_doll').displayName('[AFoP]晴天娃娃').unstackable().tooltip(
        Component.aqua("右键可以将天气设为晴天，但是会付出一些代价。")
    )

    event.create('warhead').texture('kubejs:item/warhead').displayName('[AFoP]不完整的导弹').maxStackSize(7).tooltip(
        Component.darkGray("tooltip")
    )

    event.create('broken_white_clothes').texture('kubejs:item/broken_white_clothes').displayName('[AFoP]残破的白衣一角').maxStackSize(7)

    event.create('stone_mask').texture('kubejs:item/stone_mask').displayName('[AFoP]石鬼面').unstackable()

    event.create('lateinos','axe').texture('kubejs:item/lateinos').displayName('§a原初§f·§6开天').unstackable().maxDamage(117321).attackDamageBaseline(42).speed(17).fireResistant(true).modifyTier(tier => {
        tier.setLevel(4)
    })

    event.create('primary_ingot').texture('kubejs:item/primary_ingot').displayName('§a原初合金').maxStackSize(64)

    event.create('mithril_rod').texture('kubejs:item/mithril_rod').displayName('秘银棍').maxStackSize(64)

    event.create('season_selector').texture('kubejs:item/season_selector').displayName('季节变更器').unstackable()

});

ItemEvents.modification(event => {
    event.modify('kubejs:lateinos', item => {
      item.digSpeed = 15
      item.attackSpeed = 1
    })
  })