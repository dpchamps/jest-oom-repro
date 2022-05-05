
  describe("some-evil-spec=803", () => {
    it("evil-block-803", () => {
      window.evil_803 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  