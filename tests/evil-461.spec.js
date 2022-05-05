
  describe("some-evil-spec=461", () => {
    it("evil-block-461", () => {
      window.evil_461 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  