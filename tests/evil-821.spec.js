
  describe("some-evil-spec=821", () => {
    it("evil-block-821", () => {
      window.evil_821 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  