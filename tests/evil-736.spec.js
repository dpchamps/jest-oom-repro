
  describe("some-evil-spec=736", () => {
    it("evil-block-736", () => {
      window.evil_736 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  