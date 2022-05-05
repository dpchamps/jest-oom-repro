
  describe("some-evil-spec=825", () => {
    it("evil-block-825", () => {
      window.evil_825 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  