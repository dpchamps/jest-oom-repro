
  describe("some-evil-spec=921", () => {
    it("evil-block-921", () => {
      window.evil_921 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  