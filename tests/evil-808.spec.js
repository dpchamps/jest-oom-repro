
  describe("some-evil-spec=808", () => {
    it("evil-block-808", () => {
      window.evil_808 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  