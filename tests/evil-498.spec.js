
  describe("some-evil-spec=498", () => {
    it("evil-block-498", () => {
      window.evil_498 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  