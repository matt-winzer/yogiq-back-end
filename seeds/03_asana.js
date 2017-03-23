exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "asana"; ALTER SEQUENCE asana_id_seq RESTART WITH 10;')
    .then(function () {
      var asanas = [{
        id: 1,
        name: 'Melting Heart',
        description: 'From a Tabletop position, walk your hands slightly forward of your shoulders and lower to your forearms. Allow your chest to soften between your shoulder blades, keeping your hips stacked over the knees. As you settle into the shape, relax your arms and legs. When your are ready to come out, push into your hands and lie face down. Take 10 breaths with a neutral spine, before moving into the next pose.',
        time: '3-4 minutes',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/puppypose-summer-yin.jpg',
        firstTarget: 'Heart',
        secondTarget: 'Shoulders'
      }, {
        id: 2,
        name: 'Seal Pose',
        description: 'From your belly, come onto your forearms with your elbows slightly forward of your shoulders, so that your chest is open and relaxed. Stay for about 10 breaths and when you are ready to move a little deeper, press into your hands and straighten your arms, walking them as far in or out as feels appropriate. If this becomes too intense, you can always come back to your forearms. To come out, simply bend and draw the elbows out, stacking them over the palms and releasing your forehead down to your hands. Stay for 10 breaths before moving to the next pose.',
        time: '3-4 minutes',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/cobra-summer-yin.jpg',
        firstTarget: 'Low Back',
        secondTarget: 'Hips'
      }, {
        id: 3,
        name: 'Meditation Seat',
        description: 'Starting in a comfortable easy seat, take 9 clearing rounds of vital breath. Close your eyes and allow yourself to become more present within each cycle. Once you are have arrived fully and feel settled, let’s begin.',
        time: '3-5 minutes',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/namaste-summer-yin.jpg',
        firstTarget: 'Mind',
        secondTarget: 'Heart'
      }, {
        id: 4,
        name: 'Shoulder Stretch',
        description: 'Again from your belly, extend your right arm out about 90 degrees from your body and roll toward your right hip, bending at the knees. Relax your head onto the floor. Spend some time exploring your breath, before moving any deeper. Should it feel appropriate to deepen, you can step the left foot behind you and point the left knee (top leg) up. Be kind to your body and make sure you don’t compromise the quality of your breath by surpassing your edge. To release the pose, come back to your belly then press back to Child’s Pose (knees together), sweeping your arms by your sides. Rest for about 10 breaths before repeating on the left side.',
        time: '3 minutes / side',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/shoulder-stretch-summer-yin.jpg',
        firstTarget: 'Shoulders',
        secondTarget: 'Spine'
      }, {
        id: 5,
        name: 'Tadpole with Twist',
        description: 'Walk your knees wide and draw your feet narrow, keeping your hips back toward your heels. Next, press into your right hand and thread your righ arm/shoulder toward your left knee. If it’s available to you, reach and rest your left hand on your lower back in order to open your chest. Tune in to your breath and find stillness for 20–30 breaths. When you’re ready to come out, push into your left hand and come back to center. If it feels appropriate to widen your knees, you can adjust them before moving into the other side.',
        time: '3 minutes / side',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/caterpillar-summer-yin.jpg',
        firstTarget: 'Hips',
        secondTarget: 'Shoulders'
      }, {
        id: 6,
        name: 'Caterpillar',
        description: 'From a seated position, extend your legs out in front. Begin to walk your hands forward until you reach your first sign of tension (known as your first edge). Round your spine forward and relax your legs. You may choose to bow your head forward to invite a deep stretch through the upper back, shoulders and neck. Breathe into the back of your body, with a special focus on the front, back and sides of heart and lungs. Stay 30–40 breaths. To come out, walk your hands in and press up to an upright seat.',
        time: '3-4 minutes',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/forwardfold-summer-yin.jpg',
        firstTarget: 'Hamstrings',
        secondTarget: 'Low Back'
      }, {
        id: 7,
        name: 'Supported Fish',
        description: 'Using a block or bolster, positioned directly under the shoulders and head, lie back ensuring that your shoulders and chest are open and you feel supported. Find a comfortable position for your arms, allowing your palms to face up. Relax your legs—knees can be bent or straight, just find a shape that allows you to surrender your body for the next several minutes. To come out, press into your elbows and release to one side, as you come off your props. Take a few breaths here before rolling onto your back.',
        time: '4-5 minutes',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/supportedfish-summer-yin.jpg',
        firstTarget: 'Heart',
        secondTarget: 'Upper Back'
      }, {
        id: 8,
        name: 'Knees to Chest',
        description: 'On your back, gently drawn your knees into your chest, holding onto your shins or the backs of your thighs. Do what feels good in your body, perhaps slowly rocking from side to side. Stay as long as you need before moving to Savasana.',
        time: '1-2 minutes',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/hug-summer-yin.jpg',
        firstTarget: 'Legs',
        secondTarget: 'Mind'
      }, {
        id: 9,
        name: 'Savasana',
        description: 'Now, lie back with no set expectation or agenda. Release your practice and any lingering sensations from the postures that have led up to this very moment. Soften your entire body and settle your mind. With one hand on your heart, one hand on your belly, steep in the vitality from your practice. Repeat often.',
        time: '6-8 minutes',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/savasana-summer-yin.jpg',
        firstTarget: 'Mind',
        secondTarget: 'Heart'
      }, {
        id: 10,
        name: 'Butterly',
        description: 'Draw your feet together, allowing your knees to bend wide. As you begin to release the spine forward, close your eyes and allow yourself to be led by sensation instead of what the shape looks like. Once you’ve found a comfortable place to land, see if you can find stillness for the next 20–30 cycles of breaths or so. To come out of Butterfly, slowly extend your spine back to upright and extend your legs. Move slowly and carefully as the sensations intensify in the legs and lower back.',
        time: '3-4 minutes',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/fallyinpose4.jpg',
        firstTarget: 'Hips',
        secondTarget: 'Back'
      }, {
        id: 11,
        name: 'Child\'s Pose',
        description: 'Bring your knees together and draw your hips back toward your heels, rounding the spine forward and relaxing the shoulders. Soften your entire body here and breathe into the back of your lungs. Consider either reaching your arms forward or bending one arm at a time and placing your hand to the opposite elbow. Find stillness for the next several minutes, making any adjustments you need to be comfortable.',
        time: '4-6 minutes',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/fallyinposechilds.jpg',
        firstTarget: 'Back',
        secondTarget: 'Neck'
      }, {
        id: 12,
        name: 'Lateral Dragonfly',
        description: 'Extend your legs wide apart, ground both sitting bones and lengthen your spine. Begin to turn your chest toward the right leg and walk your hands out, any amount, as you round the spine toward your right thigh. Only go as far as your first point of tension and use this as an opportunity to practice patience. Stay for 20–30 breaths and slowly make your way back up to center, then repeat on the left side.',
        time: '3-4 minutes / side',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/fallyinposes8.jpg',
        firstTarget: 'Hamstrings',
        secondTarget: 'Groin'
      }, {
        id: 13,
        name: 'Lateral Half Dragonfly',
        description: 'Extend your right leg wide, ground both sitting bones and lengthen your spine. Bend your left leg at the knee and tuck your left foot into your groin. Begin to turn your chest toward the right leg and walk your hands out, any amount, as you round the spine toward your right thigh. Only go as far as your first point of tension and use this as an opportunity to practice patience. Stay for 20–30 breaths and slowly make your way back up to center, then repeat on the left side.',
        time: '3-4 minutes / side',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/fallyinposestretch.jpg',
        firstTarget: 'Hamstrings',
        secondTarget: 'Groin'
      }, {
        id: 14,
        name: 'Supported Fish with Blanket',
        description: 'Roll up a blanket or towel and place it across your mat so that when you lie back, the blanket is beneath your breastbone. Make sure your shoulders are connected with the mat then find a comfortable position with your arms either reaching out overhead or out to the sides. Step the feet wide, allowing bent knees to come toward each other, creating extra space in the sacrum. With the eyes closed, draw your breath into the front of your lungs. Stay another 4–5 minutes. To come out, roll onto one side, off of the blanket, encouraging the spine to rest in neutral.',
        time: '4-5 minutes',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/fallyinposes6.jpg',
        firstTarget: 'Heart',
        secondTarget: 'Upper Back'
      }, {
        id: 15,
        name: 'Banana',
        description: 'Lie on your back, stretching your arms overhead and your legs out straight. Reach your arms and legs over to the right corners or your mat. Adjust your head and shoulders but be mindful to keep the hip stationary to create maximum space on the left side, in the shape of a crescent moon (or banana). Send your breath into your left waist. Allow the weight of the body to settle for the next few minutes. Make your way back to neutral between sides and repeat.',
        time: '3-4 minutes / side',
        imageURL: 'http://media.yogajournal.com/wp-content/uploads/fallyinposes6.jpg',
        firstTarget: 'Side Body',
        secondTarget: 'Hips'
      }];
      return knex('asana').insert(asanas);
    });
};
