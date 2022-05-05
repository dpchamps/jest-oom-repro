
  describe("some-evil-spec=431", () => {
    it("evil-block-431", () => {
      window.evil_431 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  