export default {
  
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/mock/fileMock.js',
    '\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  transform: {

    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
  
}
