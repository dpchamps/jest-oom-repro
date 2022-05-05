
  describe("some-evil-spec=845", () => {
    it("evil-block-845", () => {
      window.evil_845 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  