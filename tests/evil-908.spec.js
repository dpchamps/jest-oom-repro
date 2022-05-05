
  describe("some-evil-spec=908", () => {
    it("evil-block-908", () => {
      window.evil_908 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  