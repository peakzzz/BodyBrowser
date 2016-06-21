// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Information about the models that open-3d-viewer will display.
 */

/* ====================================================================== */
/*                        ADD YOUR MODELS HERE                            */
/* ====================================================================== */

o3v.MODELS = [
    {
    name: 'skeletal.obj',
    scriptName: 'skeletal.js',
    modelPath: 'models/skeletal/',
    metadataFile: 'entity_metadata.json',
    texturePath: 'models/common/',
    numLayers: 1
    },{
    name: 'male_skin.obj',
    scriptName: 'male_skin.js',
    modelPath: 'models/male_skin/',
    metadataFile: 'entity_metadata.json',
    texturePath: 'models/common/',
    numLayers: 1
    },{
    name: 'female_skin.obj',
    scriptName: 'female_skin.js',
    modelPath: 'models/female_skin/',
    metadataFile: 'entity_metadata.json',
    texturePath: 'models/common/',
    numLayers: 1
    },
    {
        name: 'cow_anatomy.obj',
        scriptName: 'cow_anatomy.js',
        modelPath: 'models/cow_anatomy/',
        metadataFile: 'entity_metadata.json',
        texturePath: 'models/common/',
        numLayers: 1
    }
];