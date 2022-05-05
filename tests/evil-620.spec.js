
  describe("some-evil-spec=620", () => {
    it("evil-block-620", () => {
      window.evil_620 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  