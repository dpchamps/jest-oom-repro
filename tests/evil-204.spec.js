
  describe("some-evil-spec=204", () => {
    it("evil-block-204", () => {
      window.evil_204 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  