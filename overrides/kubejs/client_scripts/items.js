ItemEvents.tooltip(event => {

    event.addAdvanced('kubejs:ancient_diary', (item, advanced, text) => {
        text.add(1, Text.gray(`......`))
        text.add(2, Text.gray(`4.24，和sakura 去东京天空树，世界上最暖和的地方在天空树的顶上。`))
        text.add(3, Text.gray(`4.25，和sakura 去迪士尼，鬼屋很可怕，但是有sakura 在，所以不可怕。`))
        text.add(4, Text.gray(`......`))
        text.add(5, Text.gray(`sakura最好了!`))
      })

    event.addAdvanced('kubejs:broken_contract', (item, advanced, text) => {
        text.add(1, Text.gray(`虽然有点破损，但保存的非常好，似乎是从帐本里撕下来的...`))
        text.add(2, Text.gray(`中间这个字是 '斑'?`))
        text.add(3, Text.gray(`......`))
      })

    event.addAdvanced('kubejs:warhead', (item, advanced, text) => {
        text.add(1, Text.gray(`我很难想象过去，如同他们现在一般。`))
        text.add(2, Text.gray(`儿童节快乐，远方的孩子们，愿世界和平！`))
        text.add(3, Text.gold(`- 耀星 2024/6/1`))
      })

    event.addAdvanced('kubejs:broken_white_clothes', (item, advanced, text) => {
        text.add(1, Text.gray(`上面残留的气息竟如此强大，`))
        text.add(2, Text.gray(`让人不自主的想跪拜！`))
        text.add(3, Text.red(`似乎模模糊糊有个血字，好像是'君'？`))
        text.add(4, Text.gray(`......`))
      })

    event.addAdvanced('kubejs:stone_mask', (item, advanced, text) => {
        text.add(1, Text.gray(`都毁灭吧，这人不做也罢！`))
        text.add(2, Text.aqua(`右键尝试激活`))
      })
    
    event.addAdvanced('kubejs:season_selector', (item, advanced, text) => {
        text.add(1, Text.aqua(`右键切换季节`))
        text.add(2, Text.red(`在服务器内频繁使用可能会导致卡服`))
      })
    event.addAdvanced('kubejs:lateinos', (item, advanced, text) => {
        text.add(1, Text.aqua(`拥有权与力之后，就很难不使用`))
        text.add(2, Text.red(`或许有其他的奇异效果呢`))
      })
})
  
