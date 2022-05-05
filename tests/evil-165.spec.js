
  describe("some-evil-spec=165", () => {
    it("evil-block-165", () => {
      window.evil_165 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  