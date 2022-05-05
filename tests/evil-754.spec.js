
  describe("some-evil-spec=754", () => {
    it("evil-block-754", () => {
      window.evil_754 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  