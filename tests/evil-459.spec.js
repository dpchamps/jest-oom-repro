
  describe("some-evil-spec=459", () => {
    it("evil-block-459", () => {
      window.evil_459 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  