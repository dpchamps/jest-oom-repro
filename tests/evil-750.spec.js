
  describe("some-evil-spec=750", () => {
    it("evil-block-750", () => {
      window.evil_750 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  