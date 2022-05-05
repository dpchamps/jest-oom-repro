
  describe("some-evil-spec=553", () => {
    it("evil-block-553", () => {
      window.evil_553 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  