
  describe("some-evil-spec=760", () => {
    it("evil-block-760", () => {
      window.evil_760 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  