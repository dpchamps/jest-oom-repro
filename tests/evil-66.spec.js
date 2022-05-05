
  describe("some-evil-spec=66", () => {
    it("evil-block-66", () => {
      window.evil_66 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  