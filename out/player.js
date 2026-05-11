"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const _isWindows = process.platform === 'win32';
const _playerWindowsPath = path.join(__dirname, '..', 'audio', 'ffplay.exe');
const child_process_1 = require("child_process");
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ':', ';', '>'];
console.log("helo");
exports.default = {
    play(fileName, config) {
        const filePath = path.join(__dirname, '..', 'audio', fileName);
        console.log(filePath);
        return new Promise((resolve, reject) => {
            if (_isWindows) {
                try {
                    console.log("Bimbows");
                    var pitchFactor = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
                    if (fileName.includes('sfx')) {
                        pitchFactor = 0;
                        console.log("I DID IT DAD!!");
                    }
                    const ffmpeg = (0, child_process_1.spawn)(_playerWindowsPath, [
                        '-i', filePath,
                        '-nodisp',
                        '-autoexit',
                        '-af', 'asetrate=44100*2^(' + pitchFactor + '/12),atempo=1/2^(' + pitchFactor + '/12)'
                    ]);
                    ffmpeg.on('close', (code) => {
                        if (code === 0) {
                            resolve();
                        }
                        else {
                            reject(new Error(`FFmpeg process exited with code ${code}`));
                        }
                    });
                }
                catch (error) {
                    console.log('Error playing sound:', error);
                }
            }
            else {
                try {
                    console.log("I'm not a bimbows machine");
                    var pitchFactor = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
                    if (fileName.includes('sfx')) {
                        pitchFactor = 0;
                        console.log("I DID IT DAD!!");
                    }
                    const command = "ffmpeg ffmplay -i " + filePath + "-nodisp -autoexit -af asetrate=44100*2^(" + pitchFactor + "/12),atempo=1/2^(" + pitchFactor + "/12)";
                    const ffmpeg = (0, child_process_1.spawn)(command);
                    console.log(ffmpeg);
                    ffmpeg.on('close', (code) => {
                        if (code === 0) {
                            resolve();
                        }
                        else {
                            reject(new Error(`FFmpeg process exited with code ${code}`));
                        }
                    });
                }
                catch (_a) {
                    console.log("I died, dad.");
                }
            }
        });
    }
};
//# sourceMappingURL=player.js.map