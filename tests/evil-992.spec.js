
  describe("some-evil-spec=992", () => {
    it("evil-block-992", () => {
      window.evil_992 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  